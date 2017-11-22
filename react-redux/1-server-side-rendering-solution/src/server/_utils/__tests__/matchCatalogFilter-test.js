import {
  getPathFilters,
  validatePathFilters,
  getQueryString,
  getQueryObj,
  getCatalogFilterDescription,
} from './../catalogFilter-utils';

describe('Util MatchCatalogFilter', () => {
  describe('Method: getPathFilters', () => {
    it('give a path and return an array of oibject (valid filters).', () => {

      const paths = [
        '/brasil/africa-do-sul/param3',
        '/param/brasil/africa-do-sul/',
        'brasil/africa-do-sul/non-filter',
      ];

      const expected = [
        {
          default: 'Brasil',
          type: 'country',
          pluralFem: 'Brasileiras',
          pluralMasc: 'Brasileiros',
        },
        {
          default: 'África do Sul',
          pluralFem: 'Sul-africanas',
          pluralMasc: 'Sul-africanos',
          type: 'country',
        }
      ];

      paths.map(path => {
        expect(getPathFilters(path)).toEqual(expected);
      });
    });
  });

  describe('Method: validatePathFilters', () => {
    it('is returning true for a path with valid filters', () => {
      const paths = [
        'tinto/brasil_africa-do-sul/merlot',
        '/rose/bordeaux/castelao',
        'tinto_branco/africa-do-sul/merlot_cortese',
        '/cerveja',
        '/romenia',
        '/chenin-blanc',
        '/tinto/merlot',
        '/romenia/merlot',
      ];

      paths.map(path => {
        expect(validatePathFilters(path)).toEqual(true);
      });
    });

    it('is returning false if it has one or more invalid filter/s i nthe path', () => {
      const paths = [
        '/brasill/africa-do-sul/belgica',
        '/brasil_rose/tinto',
        'cachaca/africa-do-sul/cortese',
        'tinto/cortese/africa-do-sul',
        'tinto/cortese/africa-do-sul/brasil',
        'brasil_africa-do-sul/tinto/merlot',
        'castelao/rose/bordeaux',
      ];

      paths.map(path => {
        expect(validatePathFilters(path)).toEqual(false);
      });
    });
  });

  describe('Method: getQueryString', () => {
    it('receive a path, extract all the valid filters and return a queryString', () => {
      const paths = [
        '/arroz/brasil/tinto',
        '/brasil/tinto/limao/',
        'brasil/tinto',
        '/tinto',
        '/dolcetto',
        '/tinto/dolcetto',
        'branco/estados-unidos/nero-di-troia',
        'invlaid-filter/invlaid-filter2/nero-di-troia',
      ];

      const expected = [
        'country[]=Brasil&type[]=Tinto&',
        'country[]=Brasil&type[]=Tinto&',
        'country[]=Brasil&type[]=Tinto&',
        'type[]=Tinto&',
        'grape[]=Dolcetto&',
        'type[]=Tinto&grape[]=Dolcetto&',
        'type[]=Branco&country[]=Estados Unidos&grape[]=Nero di Troia&',
        'grape[]=Nero di Troia&',
      ];

      paths.map((path, i) => {
        expect(getQueryString(path)).toEqual(expected[i]);
      });
    });
  });

  describe('Method: getQueryObj', () => {
    it('receive path of filter and return an obj of queries', () => {
      const paths = [
        '/arroz/brasil/tinto',
        '/brasil/tinto/limao/',
        'brasil/tinto',
        '/tinto',
        '/dolcetto',
        '/tinto/dolcetto',
        'branco/estados-unidos/nero-di-troia',
        'invlaid-filter/invlaid-filter2/nero-di-troia',
      ];

      const expected = [
        {
          type: ['Tinto'],
          country: ['Brasil'],
        },
        {
          type: ['Tinto'],
          country: ['Brasil'],
        },
        {
          country: ['Brasil'],
          type: ['Tinto'],
        },
        {
          type: ['Tinto'],
        },
        {
          grape: ['Dolcetto'],
        },
        {
          type: ['Tinto'],
          grape: ['Dolcetto'],
        },
        {
          type: ['Branco'],
          grape: ['Nero di Troia'],
          country: ['Estados Unidos'],
        },
        {
          grape: ['Nero di Troia'],
        },
      ];

      paths.map((path, i) => {
        expect(getQueryObj(path)).toEqual(expected[i]);
      });
    });
  });

  describe('Method: getCatalogFilterDescription', () => {
    const paths = [
      '/tinto/brasil',
      '/brasil',
      '/tinto/brasil/merlot',
      '/merlot',
      '/cerveja',
      '/cerveja/argentina',
      '/cerveja/africa-do-sul',
      'africa-do-sul',
    ];

    const expected = [
      'Vinhos Tintos Brasileiros',
      'Vinhos Brasileiros',
      'Vinhos Tintos Brasileiros Merlot',
      'Vinhos Merlot',
      'Cervejas',
      'Cervejas Argentinas',
      'Cervejas Sul-africanas',
      'Vinhos Sul-africanos',
    ];

    paths.map((path, i) => {
      expect(getCatalogFilterDescription(path)).toEqual(expected[i]);
    });
  });
});
