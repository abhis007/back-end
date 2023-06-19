function createCounter(params) {
    var count  = 0;
    function increment() {
        count++
        console.log(count)
    }
    function decrement(){
        count --
        console.log(count)
    }

    return{
        increment:increment,
        decrement:decrement
    }
}

let counter  = createCounter()
counter.increment()
counter.increment()
counter.increment()
counter.increment()

