import allowedCatalogFilters from './json/catalog-categorization';

/**
 * Give any path and return an array of objects witch contains valid filters
 * @param  {String} path
 * @return {Array}
 */
export function getPathFilters(path = '') {
  return path.replace(/(^\/)|(\/$)/g, '')
    .toLowerCase()
    .split(/\/|_/)
    .filter(fl => allowedCatalogFilters[fl])
    .map(fl => allowedCatalogFilters[fl]);
}

/**
 * Give any path and validate based on our catalog filters
 * @param  {String} path
 * @return {Boolean}
 */
export function validatePathFilters(path = '') {
  const filtersGroup = path.replace(/(^\/)|(\/$)/g, '').toLowerCase().split('/');

  if (filtersGroup.length > 3) {
    return false;
  }

  const hasInvalidFilter = filtersGroup.some(filterGroup =>
    filterGroup.split('_').some(filter => !allowedCatalogFilters[filter])
  );

  if (hasInvalidFilter) {
    return false;
  }

  const hasMultipleTypes = filtersGroup.some(filterGroup => {
    const filters = filterGroup.split('_');
    return filters.some(filter =>
      allowedCatalogFilters[filters[0]].type !== allowedCatalogFilters[filter].type
    );
  });

  if (hasMultipleTypes) {
    return false;
  }

  let currentGroupTypeIndex = 0;

  const isNotOrdered = filtersGroup.some(filterGroup => {
    const order = ['type', 'country', 'grape'];
    const filters = filterGroup.split('_');

    const firstFilterGroup = filters[0];
    const firstFilterGroupType = allowedCatalogFilters[firstFilterGroup].type;

    if (order.indexOf(firstFilterGroupType) < currentGroupTypeIndex) {
      return true;
    }

    currentGroupTypeIndex = order.indexOf(firstFilterGroupType);
    return false;
  });

  if (isNotOrdered) {
    return false;
  }

  return true;
}

/**
 * Receive any path and return a query string based on our catalog filters
 * @param  {String} path
 * @return {String}
 */
export function getQueryString(path = '') {
  const filters = getPathFilters(path);

  const query = (f) => `${f.type}[]=${f.default}&`;

  return filters.reduce((prev, filter) => `${prev}${query(filter)}`, '');
}

/**
 * Receive any path and return a query obj
 * @param  {String} path
 * @return {Object}
 */
export function getQueryObj(path = '') {
  const filters = getPathFilters(path);
  const obj = {};

  filters.forEach((filter) => {
    if (!obj[filter.type]) {
      obj[filter.type] = [filter.default];
      return false;
    }

    if (obj[filter.type].indexOf(filter.default) === -1) {
      obj[filter.type].push(filter.default);
      return false;
    }

    return false;
  });

  return obj;
}

/**
 * Receive any path and return a humanized description of the path
 * @param  {Object} type
 * @param  {Object} country
 * @param  {Object} grape
 * @return {String}
 */
function mountFilterDescription(type, country, grape) {
  let description = '';

  if (type) {
    description = type.isWine ? `Vinhos ${type.plural}` : `${type.plural}`;
  }

  if (country && !type) {
    description = `Vinhos ${country.pluralMasc}`;
  } else if (country) {
    const isTypeFem = type.gender === 'F';
    description += isTypeFem ? ` ${country.pluralFem}` : ` ${country.pluralMasc}`;
  }

  if (!country && !type && grape) {
    description = `Vinhos ${grape.default}`;
  } else if (grape) {
    description += ` ${grape.default}`;
  }

  return description;
}

/**
 * Receive any path and return a humanized description of the path
 * @param  {String} path
 * @return {String}
 */
export function getCatalogFilterDescription(path = '') {
  let typeObj = null;
  let countryObj = null;
  let grapeObj = null;

  const filters = path.replace(/(^\/)|(\/$)/g, '').split('/');

  // Find Filter Type
  filters.forEach(filter => {
    const filterObj = allowedCatalogFilters[filter] || {};
    const filterType = allowedCatalogFilters[filter].type || '';

    switch (filterType) {
      case 'type':
        typeObj = filterObj;
        break;
      case 'country':
        countryObj = filterObj;
        break;
      case 'grape':
        grapeObj = filterObj;
        break;
      default:
    }
  });

  return mountFilterDescription(typeObj, countryObj, grapeObj);
}
