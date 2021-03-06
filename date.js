// provide date in either
// npm run date 2022-01-11 14:02:21
// npm run date 2022-01-11

// can also generate in french format

import { format } from 'date-fns'
import clipboard from 'clipboardy'

import fr from 'date-fns/locale/fr/index.js'

const args = process.argv.slice(2)

let inputDate = args.join(' ')

const jsDate = new Date(inputDate)

let options = {}
//let options = { locale: fr }

const formattedDate = format(jsDate, 'd MMM yyyy', options)
console.log(formattedDate)
console.log("copied to clipboard")
clipboard.writeSync(formattedDate)