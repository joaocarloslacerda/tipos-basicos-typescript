console.log("----------------Sessão string---------------");
let firstName: string;
firstName = "joão";
console.log("Primeiro nome:", firstName);

console.log("----------------Sessão number---------------");
let valueNumber: number;
valueNumber = 20;
console.log("Valor number:", valueNumber)

console.log("----------------Sessão boolean---------------");
let valueBoolean: boolean;
valueBoolean = true;
console.log("Valor booleano:", valueBoolean)

console.log("----------------Sessão Array<string>---------------");
let listNames: Array<string>;
listNames = ["joao", "zezinho", "lacerda"];
console.log(listNames)

console.log("----------------Sessão any---------------");
let anyAmount: any;
anyAmount = 50;
console.log("Variável com número:", anyAmount);
anyAmount = "minha idade"
console.log("Variável com string:", anyAmount)

console.log("----------------Sessão Objeto, undefined e null---------------")
interface Iperson {
    firstName: string,
    surname: string,
    yearsOld: number,
    address?: string | undefined,
    phone?: string | null
}
const personOne: Iperson = {
    firstName: "john",
    surname: "john",
    yearsOld: 30,
    address: "Rua São João"
}
const personTwo: Iperson = {
    firstName: "joão",
    surname: "lacerda",
    yearsOld: 26,
    phone: "(51) 99834-2332"
}

console.log(`Primeiro nome: ${personOne.firstName} \nSobrenome: ${personOne.surname} \nIdade: ${personOne.yearsOld} \nEndereço: ${personOne.address}`)
console.log(`Primeiro nome: ${personTwo.firstName} \nSobrenome: ${personTwo.surname} \nIdade: ${personTwo.yearsOld} \nTelefone: ${personTwo.phone}`)

console.log("----------------Sessão Enum---------------");

enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}

let currentStatus: Status = Status.Active;
console.log("Status atual:", currentStatus);
currentStatus = Status.Pending;
console.log("Status atual:", currentStatus);
