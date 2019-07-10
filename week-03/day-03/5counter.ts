// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
    integer: number;



    constructor(integer: number = 0) {
        this.integer = integer
    }
    add() {
        this.integer++
    }

    get() {
        console.log(this.integer)
    }

    reset() {
        this.integer = 0;
    }
    addAny(x: number) {
        this.integer = this.integer + x;
    }

}

let newCounter: Counter = new Counter()
newCounter.add()
newCounter.add()
newCounter.add()
newCounter.add()
newCounter.add()
newCounter.get()
newCounter.reset()
newCounter.get()
newCounter.addAny(500000)
newCounter.get()