let name = 'Vasya';
let age = 25;
const person = {name: 'Petya', age: 40};
person.gender = "male";
delete person.age;
let key = "gender";
let field = person[key];
key = "age";
person[key] = 20;
({name, age} = person);
let {gender} = person;

function getOccurencesObject(string) {
    //TODO
    //return object with data about occurences for each character
    //in the given string
    //"abcadab"
    //data should include a -> encountered 3 times
    //b -> two times, c and d -> one time
    const occurences = {};
    for (const char of string) {
        if (char in occurences) {
            occurences[char]++;
        } else {
            occurences[char] = 1;
        }
    }
    return occurences;
}