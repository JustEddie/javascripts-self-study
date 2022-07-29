//JSON
//JavaScript Object Notation

//1.Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['🍋','🧅']);
console.log(json);

const lemony = {
    name : '🍋',
    color: "yellow",
    size: null,
    birthDate: new Date(),
    cute: ()=>{
        console.log(`${name} is cute!`);
    }
}

json = JSON.stringify(lemony, ["name"]); // only name is assigned in json

json = JSON.stringify(lemony,(key,value)=>{
    return key === 'color' ? 'orange' : value; // if key is color : change the value to orange. if not, just keep the original value
}) //when only accessing one key:value to give change


//2.JSON to Object
//parse(json)
console.clear(); //clear console

json = JSON.stringify(lemony);
const obj = JSON.parse(json,(key,value)=>{
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
//lemony.cute(); //name not defined error
//when stringify json, function disappeared


///////nullish coalescing operater ??
//🧨 Bad Code 💣
function printMessage(text) {
    let message = text;
    if (text == null || text == undefined) {
        message = 'Nothing to display 💔'
    }
    console.log(message);
}

//🧸 Good Code 🌈
function printMessageGood(text){
    const message = text ?? 'Nothing to display 💔';
    console.log(message);
}