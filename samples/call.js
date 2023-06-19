var greet = function (greet){
    console.log(`${greet} ${this.name}`)
}

var  person  ={
    name:'abhinand',
    age:'29'
}

greet.call(person,'hello')
greet.call(person,'hai')