let sum = 0
const value = process.argv

for (let i = 2; i < value.length; i++) {
   sum += Number(value[i])
}

console.log(sum)