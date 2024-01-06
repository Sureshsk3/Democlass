// primitive datatypes
var number=10; //Number
var name="suresh";//string
var percentage=6.5;//Number
var flag= true;//Boolean

console.log(number, typeof number);
console.log(name, typeof name);
console.log(percentage, typeof percentage);
console.log(flag, typeof flag);

// Non primitive data types
// array (collection of data types)
const arr = [10, "suresh", percentage, false];
console.log(arr);
// object json
//key and value

const obj= {
    name : "suresh"
    
}
console.log(obj);

//copy by value and copy by reference
var num1 = 10;
var num2 = num1;
num2= 15;
console.log("num1 ", num1);
console.log("num2 ", num2);

//copy by reference
let studArr= ["velu","kobal","kumar"];
let studArrCopy = studArr;
studArrCopy[0] = "Suresh";
console.log("student array", studArr);
console.log("studend copy", studArrCopy);

let nestobj =[
    {
        class : "fsd",
        student : [
            {
                name : "suresh",
                stack : [
                    "html",
                    "css",
                    {
                        js: ["react","angular"]
                    }
                ]
        
            },
            {
                name : "kobal",
                stack : [
                    "html",
                    "css",
                    {
                        js: ["vue","angular"]
                    }
                ]

            }
        ]
    }
]

console.log(nestobj[0].student[0].stack[2].js[0]);
console.log(nestobj[0].student[1].stack[2].js[0]);

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("get", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function (){
    const data = JSON.parse(xhr.response);
    console.log(data);
}
 


