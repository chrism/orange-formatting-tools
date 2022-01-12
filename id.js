import clipboard from 'clipboardy'

const rand = Math.random().toString().slice(2,10);

console.log(rand)
console.log("copied to clipboard")
clipboard.writeSync(rand)