const getNanodegrees = require('./async')

describe('async function', () => {
  it('can be tested using a promise', () => {
    getNanodegrees()
      .then(data => expect(data).toEqual([
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
      ]))
  })

  it('can be tested using async/await', async() => {
    const result = await getNanodegrees()
    expect(result).toEqual([
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
    ])
  })
})