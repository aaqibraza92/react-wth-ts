import React from 'react';

function Home() {
  //union
  type welcomeMsg = (a: number | string | boolean) => number | string | boolean
  const welMsg: welcomeMsg = (a) => {
    if (typeof a === "string") {
      return `${a} is type ${typeof (a)}`
    } else if (typeof a === "number") {
      return `${a} is type ${typeof (a)}`
    } else {
      return `${a} is type ${typeof (a)}`
    }
  }


  type emp1={
  name: string,
  department: string,
  phone: number
  }

  type emp2={
    state: string,
    pin: number | string,
    adult: boolean,
    addr: (string | number)[]
    }
    // type bothEmpl= emp1 & emp2;

    let student:emp1 & emp2={
      name: "aaqib",
      department: "IT",
      phone: 8269321549,
      state: "mp",
      pin: "45216",
      adult: true,
      addr: ["a","b"]

    }
    console.log("student",student)

    // const generaicFunc:<T>=(a:T)=>:T{
    //   return a;
    // }

  // const genericVal=<T>(a:T):T=>{
  //   return a;
  // }



  const myFunction = <T, U>(param1: T, param2: U): {first: T, second: U} => {
    return {first: param1,second: param2};
};

// Example usage
const result = myFunction<string, number>('Hello', 42);
console.log(result); // Output: ['Hello', 42]




// function genericFunc<T>(a:T):T{
//   return a;
// }

// const genericFunc = <T extends unknown>(x: T) => x;

const genericFunc=<T extends number,U extends number>(a:T,b:U):any=>{
  return a+b
  }
  const result1 = genericFunc<number,number>(4,5);
  
  const currentDateTime = new Date()

console.log(currentDateTime.getFullYear()+":"+currentDateTime.getMinutes());


interface User {
  name: string;
  age: number;
  class: number[];
}
interface User2 {
  name: string;
  email: string;
}
const mixedArray: (string | User | string[] | {name: string; email: string}[])[] = [
  "Admin",
  ["aaqib","jawed"],
  [
    {
      name: "aaqib",
      email: "aaqib@gmail.com"
    },
    {
      name: "aaqib2",
      email: "aaqib2@gmail.com"
    }
  ],
  { name: "John", age: 30,class: [1,2,3] },
  "Guest",
  { name: "Jane", age: 25, class:[] }
];

console.log(mixedArray);


  return (
    <>
    
    <h2>
      Hello
    </h2>
    
    </>

  );
}

export default Home;
