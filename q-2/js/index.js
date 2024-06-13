class Person {
    constructor( age) {
        this.age = age;
    }

    father() {
        return new Person(60);
    }

    child() {
        return new Person(20);
    }
}

const person = new Person();

const father = person.father();
document.getElementById("h1").innerHTML=(`Father Age: ${father.age}`);

const child = person.child();
document.getElementById("h2").innerHTML=(`Child Age: ${child.age}`);
