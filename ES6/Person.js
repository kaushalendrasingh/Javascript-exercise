

class Person {
    constructor(name) {
        this.name = name;
    }

    fun(name) {
        return this.name;
    }
}

console.log(new Person("Hello").fun());