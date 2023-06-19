function add (a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}


total  = add(5)(3)(2);
console.log(total)