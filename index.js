import { format } from 'date-fns'
import fr from 'date-fns/locale/fr/index.js'

const args = process.argv.slice(2)

let inputDate = args.join(' ')




const jsDate = new Date(inputDate)

let options = {}
//let options = { locale: fr }

const formattedDate = format(jsDate, 'd MMM yyyy', options)
console.log(formattedDate)