// provide duration in seconds

import clipboard from 'clipboardy'

const seconds = process.argv.slice(2)[0]

function convertHMS(value) {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours   = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds

  let a = [];

  if (hours) {
    a.push(`${hours} h`)
  }

  if (minutes) {
    a.push(`${minutes} min`)
  }

  if (!hours && !minutes && seconds) {
    a.push(`${seconds} s`)
  }

  return a.join(' ');
}

const response = convertHMS(seconds)

console.log("duration", response)
console.log("copied to clipboard")
clipboard.writeSync(response)