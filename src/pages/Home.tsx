import React from 'react';
import layout from "../assets/css/layout.module.css"

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

// console.log("bioData",bioData)


  return (
    <>
    
    <section>
      <img className={layout.imgFluid} src={require("../assets/img/banner_home.jpg")} alt="" />
    </section>
    
    </>

  );
}

export default Home;
