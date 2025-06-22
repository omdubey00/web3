import crypto from 'crypto'

const input = "theriddler"
const input2 = "100xdevs"

const hash2 = crypto.createHash('sha256').update(input2).digest('hex')


function findvalue(i) {
	console.log(i)
	let temp = i
	let hash = crypto.createHash('sha256').update(i.toString()).digest('hex')
	for (let j = 0; j < 5; ++j) {
		if (hash[j] !== '0') {
			return false;
		}
	}
	return true;
}

let i = 596139;
while (i >= 0) {
	const result = findvalue(i)
	if (result === true) {
		console.log(i)
		i = 'a'
	}
	else {
		i++;
	}
}
