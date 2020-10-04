
//Opgave 1.*****************************************************
let names = ['Hassan', 'Jan', 'Peter', 'Boline', 'Frederik'];

// Opgave 1, a)*****************************************************
let sort = names.filter(p => p.includes('a'));
console.log("**********Opgave 1, a)**********");
console.log(sort);

//Opgave 1, b)*****************************************************
console.log("**********Opgave 1, b)**********");
let s = names.map((re) => {
    let reversed = re.split("").reverse().join("");
    console.log(reversed);
});

//Opgave 2, a)*****************************************************
console.log("**********Opgave 2, a)**********");
function someFunction(n) {
    if (n.includes('a')) {
        return n;
    }
}

//Opgave 2.A*****************************************************
function myFilter(array, callback) {
    var filterdArray = [];
    for (let i = 0; i < array.length; i++) {
        var result = callback(array[i]);
        if (result != null) {
            filterdArray.push(result);
        };
    }

    return filterdArray;
};

var newArray = myFilter(names, someFunction);

console.log(newArray)


// Opgave 2.B*****************************************************
console.log("**********Opgave 2, b)**********");
function myMap(array, callback) {
    var mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        let result = callback(array[i]);
        mappedArray.push(result);
    }
    return mappedArray;
}

var newArray2 = myMap(names, someFunction);

console.log(newArray2)

//Opgave 3, a)*****************************************************
console.log("**********Opgave 3, a)**********");
let numbers = [1, 3, 5, 10, 11];

const cramAlg = (n, i) => {
    return numbers[i + 1] ? (n + numbers[i + 1]) : n;
};

const x = [...numbers.map(cramAlg)];
console.log(x);

//Opgave 3, b)*****************************************************
console.log("**********Opgave 3, b)**********");
const persons = names.map(p => '<a href=\"\">' + p + '</a>');
let html = '<nav> \n \t' + persons.join("\n \t") + '\n</nav';

console.log(html);

//Opgave 3, c)*****************************************************
console.log("**********Opgave 3, c)**********");
var personsNPhones = [{ name: "Hassan", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Boline", phone: "79345" }];

let p = personsNPhones.map(personsNPhones => ({
    name: personsNPhones.name, phone: personsNPhones.phone
}));

let rowsAndTables = p.join("");

console.log(rowsAndTables);

//Opgave 4, a)*****************************************************
console.log("**********Opgave 4, a)**********");
console.log(names.join('#'));



//Opgave 4, b)*****************************************************
console.log("**********Opgave 4, b)**********");
console.log(numbers.reduce((total, num) => total + num, 0));

//Opgave 4, c)*****************************************************
console.log("**********Opgave 4, c)**********");
const members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }];

let averageAge = members.reduce((accumulator, member, index, array) => {
    let tmp = accumulator += member.age;
    if (index === array.length - 1) {
        return accumulator / array.length;
    }
    return tmp
}, 0);
console.log(averageAge)

//Opgave 4, d extra)*****************************************************
console.log("**********Opgave 4, d, extra)**********");
const votes = ["Biden", "Trump", "Biden", "Biden", "Trump", "Trump", "Biden", "None"];

let voteResult = votes.reduce((total, item) => {
    if (total[item]) {
        total[item]++;
    } else {
        total[item] = 1;
    }
    return total;
}, {});
console.log(voteResult);