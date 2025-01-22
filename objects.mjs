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

export function getOccurencesObject(string) {
    //return object with data about occurences for each character
    //in the given string
    //"abcadab"
    //data should include a -> encountered 3 times
    //b -> two times, c and d -> one time

    // const occurences = {};
    
    // if (string != undefined && string != null) {
    //     const actualString = string.toString();
    //     for (const char of actualString) {
    //         if (occurences[char]) {
    //             occurences[char]++;
    //         } else {
    //             occurences[char] = 1;
    //         }
    //     }
    // }
    
    // return occurences;

    const res = {};
    if (string != undefined && string != null) {
        string = string.toString();
        for (let i = 0; i < string.length; i++) {
            let char = string[i];
            if (!res[char]) {
                res[char] = 0;
            }
            res[char]++;
        }
    }
    return res;
    
}