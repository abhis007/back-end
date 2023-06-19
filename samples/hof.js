var applyOperation = (val,operation) =>{
    return operation(val)

}


var square = num => Math.pow(num,2)

let result = applyOperation(5,square)
console.log(result)