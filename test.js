const s = new Set({
	[Symbol.iterator]: function *(){
		yield 'vall';
		yield 'val2';
		yield 'val3';
	}
})
// 3
console.log(s.size)

s.add('THEON')
s.add('THEON2')

s.delete('val2')
console.log(s)

const isMain = module === require.main

console.log('ISMAIN',isMain)

exports.test = 1