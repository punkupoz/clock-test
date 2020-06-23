let time

if (typeof process.argv[2] !== 'string') {
  time = String(process.argv[2])
} else {
  time = process.argv[2]
}

const clockGenerate = (time) => {
  const [hour, minute] = time.split(':').map(e => parseInt(e))

  /**
   * check if time is not in correct format
   */
  if (hour > 24 || hour < 1 || minute < 0 || minute > 59) {
    throw new Error('Incorrect time format')
  }


  let array = Array(12).fill('o')

  // hour - 1 = index in the array where we change to h
  if (hour < 12) {
    array[hour] = 'h'
  } else if (hour === 12 || hour === 24) {
    array[0] = 'h'
  } else {
    array[hour - 12] = 'h'
  }

  // get minute
  const getMinute = (min) => {
    return (min-(min%5))/5
  }

  // get the module of 
  const minutePosition = getMinute(minute)

  let minuteMarker = 'm'
  if (array[minutePosition] === 'h') {
    minuteMarker = 'x'
  }

  if (minutePosition < 12) { 
    array[minutePosition] = minuteMarker
  } else if (minutePosition === 12 || minutePosition === 24) {
    array[0] = minuteMarker
  } else {
    array[minutePosition - 12] = minuteMarker
  }

  const clock = `
          ${array[0]}
      ${array[11]}       ${array[1]}

  ${array[10]}             ${array[2]}

  ${array[9]}               ${array[3]}

  ${array[8]}             ${array[4]}

      ${array[7]}       ${array[5]}
          ${array[6]}
  `

  return clock
}

module.exports = clockGenerate

const clock = clockGenerate(time)

console.log(clock)

