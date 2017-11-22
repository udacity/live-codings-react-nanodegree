const nanodegrees = [
  {
    "id": 1,
    "name": "Desenvolvedor React"
  },
  {
    "id": 2,
    "name": "Fundamentos de Deep Learning"
  },
  {
    "id": 3,
    "name": "Engenheiro de Machine Learning"
  }
]

const getNanodegrees = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(nanodegrees), 2000)
  })
}

module.exports = getNanodegrees