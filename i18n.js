// npm run i18n gb

import clipboard from 'clipboardy'
import countries from "i18n-iso-countries";

const countryCode = process.argv.slice(2)[0]

console.log(countryCode)

const rand = countries.getName(countryCode, "en");

console.log(rand)
console.log("copied to clipboard")
clipboard.writeSync(rand)