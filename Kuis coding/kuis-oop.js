console.log("KUIS KODING!")

class Animal{
    constructor(name,age,isMammal){
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Rabbit extends Animal{
    constructor(name,age,isMammal){
        super(name,age,isMammal);

        this.isMammal = isMammal;
    }
    eat(){
        if (this.isMammal == true){
            return(`${this.name} sedang makan!`)
        }
    }
}

class Eagle extends Animal{
    constructor(name,age,isMammal){
        super(name,age,isMammal);

        this.isMammal = isMammal;
    }
    fly(){
        if(this.isMammal == false){
            return(`${this.name} sedang terbang!`)
        }
    }
}
const myRabbit = new Rabbit("Labi",2,true)
console.log(myRabbit.eat())

const myEagle = new Eagle("Elo",4,false)
console.log(myEagle.fly())