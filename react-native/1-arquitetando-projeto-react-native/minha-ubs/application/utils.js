export const createActionType = (type, suffixes = ['REQUEST', 'FULFILLED']) => (
  suffixes.reduce((accumulator, suffix) => ({
    ...accumulator,
    [`${type}_${suffix}`]: `${type}_${suffix}`
  }), {})
)

export const capitalize = str => {
  str = str.toLowerCase()
  return str.replace(/\b\w/g, l => l.toUpperCase())
}