import React, { useState } from "react";

const UseStateArray = () => {
  const bioData = [
    {
      id: 0,
      myName: "Chandan",
      age: 25,
    },
    {
      id: 1,
      myName: "Das",
      age: 25,
    },
    {
      id: 2,
      myName: "TechMojo",
      age: 25,
    },
  ];
  //console.log(bioData)
  const [myArray, setmyArray] = useState(bioData);
  const clearArray = () => {
    setmyArray([]);
  };
  const removeElem = (id) => {
    const myNewArray = myArray.filter((currElem) => {
      return currElem.id !== id;
    });
    setmyArray(myNewArray);
  };

  return (
    <div>
      {myArray.map((currElm) => (
        <h1 className="h1style" key={currElm.id}>
          Name:{currElm.myName} & Age:{currElm.age}
          <button className="btnInner" onClick={() => removeElem(currElm.id)}>
            remove
          </button>
        </h1>
      ))}
      <button className="btm" onClick={clearArray}>
        Click Me
      </button>
    </div>
  );
};

export default UseStateArray;


