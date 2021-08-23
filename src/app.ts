import { personGreeter } from "./personGreeter";

const firstName = "Eliot";
const secondName = "Sydenham";

const fullName = '${firstName} ${secondName}';

console.log('Hello ${fullName}');

type Person = {
    firstName: string;
    secondName: string;
    dateOfBirth?: Date;
}

const person : Person = {
    firstName: 'Eliot',
    secondName: 'Sydenham',
    dateOfBirth: new Date (2000, 0, 1)
};

const sayHelloToPerson = (p: Person) => {
    console.log(`Hello ${p.firstName} ${p.secondName}`)

};
sayHelloToPerson(person);




