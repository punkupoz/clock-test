const clockGenerate = require('./index')

describe('clockGenerate', () => {
  it('should throw err when time is not in correct format', () => {
    expect(() => {
      clockGenerate('25:00')
    }).toThrow()
    expect(() => {
      clockGenerate('23:61')
    }).toThrow()
  })

  it('should render a clock', () => {
    const time = '11:20'
    let array = Array(12).fill('o')
    array[11] = 'h'
    array[4] = 'm'

    const expectedClock = `
          ${array[0]}
      ${array[11]}       ${array[1]}

  ${array[10]}             ${array[2]}

  ${array[9]}               ${array[3]}

  ${array[8]}             ${array[4]}

      ${array[7]}       ${array[5]}
          ${array[6]}
  `
    expect(clockGenerate(time)).toEqual(expectedClock)
  })

  it('render x in place of m when m and h overlap', () => {
    const time = '11:55'
    let array = Array(12).fill('o')
    array[11] = 'x'

    const expectedClock = `
          ${array[0]}
      ${array[11]}       ${array[1]}

  ${array[10]}             ${array[2]}

  ${array[9]}               ${array[3]}

  ${array[8]}             ${array[4]}

      ${array[7]}       ${array[5]}
          ${array[6]}
  `
    expect(clockGenerate(time)).toEqual(expectedClock)
  })
})