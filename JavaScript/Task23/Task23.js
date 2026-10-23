//Task 1
console.log("Task 1");
class Mobile{
    constructor(brand,model){
        this.brand=brand;
        this.model=model;
    }
    getDetails1(){
        console.log(this.brand+" usually provides best performance in the market."+"The model "+this.model+" has a cutting edge design.");
    }
    getDetails2(){
        console.log(this.brand+" is an all-round 5G performer."+"The model "+this.model+" has great camera.");
    }
}
let mobile1=new Mobile("Samsung","Galaxy Z Fold7 5G");
let mobile2=new Mobile("Vivo","V60 5G");
mobile1.getDetails1();
mobile2.getDetails2();

//Task 2
console.log("Task 2");
class Book{
    constructor(title,author){
        this.title=title;
        this.author=author;
    }
    toRead(){
        console.log("The Book Suggestion for 2026 is: "+this.title+" by "+this.author+".");
    }
}
let book1=new Book("The Metamorphosis","Franz Kafka");
let book2=new Book("Animal Farm","George Orwell");
book1.toRead();
book2.toRead();

//Task 3
console.log("Task 3");
class Student{
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }
    boardResults(){
        console.log("The student "+this.name+" got "+this.marks+" out of 500 in the board examinations.");
    }
}
let student1=new Student("Kumudha Shree",478);
let student2=new Student("Thanujaa",456);
student1.boardResults();
student2.boardResults();