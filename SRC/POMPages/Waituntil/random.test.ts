export class RandomData {
  
static randomNumber(length: number): string {

let result = "";

for (let i = 0; i < length; i++) {
result += Math.floor(Math.random() * 10);}

return result;

}

static randomUsername(): string {

return "TestUser" + this.randomNumber(5);
}

static randomPassword(): string {

return "Test@" + this.randomNumber(6);

}

static randomFirstName(): string {

return "Test" + this.randomNumber(4);

}

static randomLastName(): string {

return "User" + this.randomNumber(4);

}

}
