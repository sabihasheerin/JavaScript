const balls = document.querySelectorAll('.ball')
//const balls = document.getElementByClassName('ball')
const body = document.querySelector('body')

balls.forEach((ball, iteration) => {
    console.log(iteration)
    const value = (iteration + 1) * 50
    ball.style = `transform:translateY(${value}px)`

})

let age = 19
let Name = "sabiha"

console.log('your age is' + age)
console.log('hi ${name} your age  is ${age}')