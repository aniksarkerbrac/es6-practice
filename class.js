class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
    }
}

const student1 = new Student(1, "mahi");
const student2 = new Student(2, "mofiz");
console.log(student1.name,student2.name);