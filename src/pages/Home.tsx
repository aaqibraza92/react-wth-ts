import React from 'react';

function Home() {
  //union

type a={
  name: string,
  email: string
}

type b={
  age: number,
  state: string,
  adult: boolean
}


const bioData: a & b={
  name: "aaqib",
  email: "aaqib@gmail.com",
  age: 78,
  state: "mp",
  adult: true

}

console.log("bioData",bioData)


  return (
    <>
    
    <h2>
      Hello
    </h2>
    
    </>

  );
}

export default Home;
