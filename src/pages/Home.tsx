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
  console.log(welMsg(12));

  return (
    <h2>
      Hello
    </h2>

  );
}

export default Home;
