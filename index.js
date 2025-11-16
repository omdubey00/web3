import crypto from 'crypto'

const input = "theriddler"
const input2 = "100xdevs"

const hash2 = crypto.createHash('sha256').update(input2).digest('hex')


function findvalue(prefix, i) {
	let temp = i
	let input = prefix.toString() + i.toString()
	console.log(input)
	let hash = crypto.createHash('sha256').update(input).digest('hex')

	if (hash.startsWith('00000')) {
		return { input, hash };
	}
	return 0
}

let i = 2274885;
while (i >= 0) {
	const result = findvalue("100xdevs", i)
	if (result === 0) {
		i++;
	}
	else {
		console.log(result)
		i = 'a'
	}
}
