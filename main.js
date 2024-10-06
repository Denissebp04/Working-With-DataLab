//  PART I

//When code is outdated or inefficient, it often goes through a process called “refactoring.” 
//Refactoring code is the process of restructuring that code without changing its original behavior.
//For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs. 
//Now that you have knowledge of arrays and objects, how would you change your approach to this problem? 
//Take a few minutes to examine and refactor the code before continuing.
  
const table = {
    index :[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Mass: [0.00, 0.49, 0.98, 1.47, 1.96, 2.45, 2.94, 3.43, 3.92, 4.41],
    Spring1: [0.050, 0.066, 0.087, 0.116, 0.142, 0.166, 0.193, 0.204, 0.226, 0.238],
    Spring2: [0.050, 0.066, 0.080, 0.108, 0.138, 0.158, 0.174, 0.192, 0.205, 0.232]
}

const objKeys = Object.keys(table)
console.log(objKeys)

let obj = {
    row1 :[1, 0.00, 0.050, 0.050],
    row2 : [2, 0.49, 0.066, 0.066],
    row3 : [3, 0.98, 0.087, 0.080],
    row4 : [4, 1.47, 0.116, 0.108],
    row5 : [5, 1.96, 0.142, 0.138],
    row6 : [6, 2.45, 0.166, 0.158],
    row7 : [7, 2.94, 0.193, 0.174],
    row8 : [8, 3.43, 0.204, 0.192],
    row9 : [9, 3.92, 0.226, 0.205],
    row10 : [10, 4.41, 0.238, 0.232]

}

 const values = Object.values(obj);
 values.forEach(value => {
   console.log(value);
 });


// PART II
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. 
// This should be calculated dynamically based on the first row of data.
// Sample CSV data as a string
const csvData = `Index, Mass, Spring 1, Spring 2
1, 0.00, 0.050, 0.050
2 , 0.49, 0.066, 0.066
3, 0.98, 0.087, 0.080
4, 1.47, 0.116, 0.108
5, 1.96, 0.142, 0.138
6, 2.45, 0.166, 0.158
7, 2.94, 0.193, 0.174
8, 3.43, 0.204, 0.192
9, 3.92, 0.226, 0.205
10, 4.41, 0.238, 0.232`;

// split into rows
const rows = csvData.split('\n');

// Get first row and Split into columns
const firstRow = rows[0];
const columns1 = firstRow.split(',');
const secondRow = rows[1]
const columns2 = secondRow.split(',')
const thirdRow = rows[2]
const columns3 = thirdRow.split(',')
const fourthRow = rows[3]
const columns4 = fourthRow.split(',')
const fifthRow = rows[4]
const columns5 = fifthRow.split(',')
const sixthRow = rows[5]
const columns6 = sixthRow.split(',')
const seventhRow = rows[6]
const columns7 = seventhRow.split(',')
const eightRow = rows[7]
const columns8 = eightRow.split(',')
const ninthRow = rows[8]
const columns9 = ninthRow.split(',')
const tenthRow = rows[9]
const columns10 = tenthRow.split(',')

console.log(columns1)
console.log(columns2)
console.log(columns3)
console.log(columns4)
console.log(columns5)
console.log(columns6)
console.log(columns7)
console.log(columns8)
console.log(columns9)
console.log(columns10)



// PART III
const table2 =[{index: 1, mass: 0.00, spring1: 0.050, spring2: 0.050}, {index: 2, mass: 0.49, spring1: 0.066, spring2: 0.066}, {index: 3, mass: 0.98, spring1: 0.087, spring2:0.080}, {index: 4, mass: 1.47, spring1: 0.116, spring2: 0.108}, {index: 5, mass: 1.96, spring1: 0.142, spring2: 0.138}, 
    {index: 6, mass: 2.45, spring1: 0.166, spring2: 0.158}, {index: 7, mass: 2.94, spring1: 0.193, spring2: 0.174}, {index: 8, mass: 3.43, spring1: 0.204, spring2: 0.192}, {index: 9, mass: 3.92, spring1: 0.226, spring2: 0.205}, {index: 10, mass: 4.41, spring1: 0.238, spring2: 0.232}]

const objVal2 = Object.values(table2)
console.log(objVal2)



// PART IV
const newTable = [
    { id: "42", name: "Bruce", occupation: "Knight", age: 41 },
    { id: "48", name: "Barry", occupation: "Runner", age: 25 },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 },
    { id: "7", name: "Bilbo", occupation: "None", age: 111 }
]

const average = newTable.reduce((accumulator, object) => {
    return (accumulator + object.age)/newTable.length;
  }, 0);

console.log(Math.round(average))




// PART V
const csv = newTable.map(item => [item.id, item.name, item.occupation, item.age])
    .map(e => e.join(","))
    .join("\n");

console.log(csv)



