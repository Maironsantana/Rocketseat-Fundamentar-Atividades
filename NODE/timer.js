const timeOut = 1000
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut)
console.log('dale')

const checking = () => console.log('check!')

let interval = setInterval(checking, timeOut)

setTimeout( () => clearInterval(interval), 5000)

