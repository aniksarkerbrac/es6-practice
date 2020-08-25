const person = {name: 'Jack William', age: 17, job: 'facebook', gfName:'Ema watson',address:'kochu khet',phone:'013838333',friends:['Tom hancks','Tom cruis','Tom silva']}

const {gfName, phone, address} = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}
const {leader} = complexObject.info;
console.log(leader);

//const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone);
// console.log(gfName, phone);
// console.log(gfName, phone);

const friends = ['sakib khan','arman khan','salman khan','sahrukh khan','amir khan'];
const [chotoFriend, nextFriend, ...bakiSobFriend] = friends;
console.log(chotoFriend, ...bakiSobFriend);