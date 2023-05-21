import person from './index.js'
console.log(person.greeting());


class Myday{
    constructor(){
        this.date = Date.now();
    }
    create = function(){
        console.log('it was created');
        return this.date;
    }
}

const a = new Myday();
const b = new Myday();

console.log(a.create());

