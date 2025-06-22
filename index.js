import crypto from 'crypto'

const input = "theriddler"
const input2 = "100xdevs"

const hash = crypto.createHash('sha256').update(input).digest('hex')
const hash2 = crypto.createHash('sha256').update(input2).digest('hex')

console.log(hash)
console.log(hash2)
