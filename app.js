function Person(name,age){
    this.name =name;
    this.age=age;
}

Person.prototype.greet =function(){
    console.log(`안녕, 내 이름은 ${this.name} 그리고 내 나이는 ${this.age}이다.`)
};
const person1 =new Person('test',30)
const person2 =new Person('test2',20)

person1.greet();
person2.greet();