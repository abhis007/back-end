var greet = function(greet1,greet2){
    console.log(`${greet1} ${this.name} , ${greet2}`)

}


const person ={
    name:'Abhinand',
    age:'29'
}

greet.apply(person,['hi','good evening'])