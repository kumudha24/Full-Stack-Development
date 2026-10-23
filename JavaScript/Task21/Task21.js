//Object
let person={
    name:"Kumudha",
    age:21,
    phoneno:9677218844,
    mailid:"kumudhashree2004@gmail.com",
    aadharno:4567892021,
    greet:function(){
        console.log("Hello,My name is:"+this.name);
    }
};
console.log(person.name);
console.log(person.age);
console.log(person.mailid);
person.greet();

//Class
class Car{
    constructor(brand,colour){
        this.brand=brand;
        this.colour=colour;
    }
    start(){
        console.log(this.brand+" Car is starting");
        console.log(this.brand,this.colour+" Car is looking nice");
    }
}
let car1=new Car("BMW","Black");
car1.start();
let car2=new Car("Audi","White");
car2.start();

//Example
class Employee{
    constructor(name,role,salary){
        this.name=name;
        this.role=role;
        this.salary=salary;
    }
    getDetails(){
        console.log(this.name+" Work as "+this.role)
    }
    getSalary(){
        console.log("Salary "+this.salary);
    }
}
let employee1=new Employee("Kumudha","Product Manager","1 Lakh");
employee1.getDetails();
employee1.getSalary();