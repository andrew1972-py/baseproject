/*function sendMessage(par1, par2) {
    document.write(par1 + ', ' + par2);
}

sendMessage('Barbara', "how are you?")
sendMessage('Alice', "how are you?")
sendMessage('Nikita', "how are you?")
sendMessage('Alex', "how are you?")

function sendMessage2(params) {
    
}
document.write(sendMessage2("Sveta", "message"));

function sendMessage3(num1, num2, name) {
    let sum = num1 + num2;
    document.write(name + ":" + sum);
    document.write('<br>')
}

sendMessage3(2, 5, "Настя");*/

// объекты

/*let user = {
    nameUser: "Maksim",
    ageUser: "49",
    genderUser: "male"
}
let a = 'likes books';
document.write(user[a]);

user.isAdmin = true;
document.write(user.nameUser);
// delete user.ageUser;*/

// определить объект со свойствами: имя, любит животных, не является админом
/*let user2 = {
    nameUser: "Maks",
    "likes animals": true,
    isAdmin: false,
}

document.write(nameUser, user2["likes animals"], user2.isAdmin)*/

/*function createObject(name, isAdmin) {
    return{
        name,
        isAdmin,
        sendMessage2: function(){
            document.write("Hello " + this.name)
        }
    }
}

let user = createObject("Nikita", true);
let user2 = createObject("Katya", true);

user.sendMessage2 = function(){
    document.write('Hello');
}

user2.sendMessage2();*/

/*let array = ['Клубника', 'Малина', 'Голубика', 'Вишня', 'Смородина'];
document.write(array[2, 4]);

function arrayClone(array);
document.write(array)*/

/*let array = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];
let newArray = [];
array.forEach((element) => {
    if ((element) % 2 == 0 && (element) % 3 == 0 && (element) % 4 == 0)  {
        newArray.push(element);
    }
}
);

document.write(newArray);*/

let array = [23, 43, 45, 22, 98, 56, 100, 33];
let i = 0;
let j = 0;

let maximum = 0;
let empty = [];

while(i<array.length){
    document.write('Индексу ' + i + ' - число ' + array[i] + ',<br>');
    i++;
}

while(j<array.lenght){
    if(array[j]> maximum){
        maximum = array[j];
    }
    j++;
}

/*for(let k = 0, k<array.length;)

document.write(maximum);*/