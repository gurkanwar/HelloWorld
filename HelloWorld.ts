class HelloWorld {

    constructor(public yourFirstName: string, public yourLastName: string) {
   }

    sayHello() {
        console.log('Hello World!' + ' My name is ' + this.yourFirstName + ' ' + this.yourLastName);
    }

}

const myHelloClassInstance = new HelloWorld('Gurkanwar', 'Singh');
myHelloClassInstance.sayHello();
