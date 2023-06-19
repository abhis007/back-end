//what is bind ?
//bind create a method with specified this value

var greet = function (){
    console.log (`Hi ,${this.name}`)
}

const person = {
    name:'abhinand',
    age:29
}

let greetPerson = greet.bind(person)
greetPerson()