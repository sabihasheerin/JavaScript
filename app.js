// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissor = document.querySelector('#scissor')

// var.Name

//console.log(Name)

function logName(Name = "john doe ", age = 18){
  //console.log("sabiha")
   console.log(Name + " you are" + age)
 }

// Never Misspell the function keyword
//a function can have multiple parameters
//you can set default values for the parameters
// Any variable you define inside a functions body is local to that function

function add(a = 0 , b = 0,){
   
 return a + b
}

const result = add()

console.log(result)
