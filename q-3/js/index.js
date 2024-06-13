class employee {
    constructor(name,age,worke) {
        this.name = name;
         this.age = age;
         this.worke=worke;
 
           document.getElementById("h1").innerHTML=(`employee name is ${this.name} .<br>  ${this.name}  age is ${this.age} and <br> ${this.name} they worke in${this.worke}`)
    }
}
const PL1 = new employee ('jon',25,'master in frontend dev.');
