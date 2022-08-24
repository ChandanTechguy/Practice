import React, { useState } from "react";

function UseStateObjects() {
  const [myObject, setMyObject] = useState({
    myName: "chandan das",
    age: 25,
    place: "durgapur",
  });

  const changeObject = () => {
    setMyObject({ ...myObject, myName: "CHANDAN DAS", age: 20 });
  };
  return (
    <div>
      <h1 className="h1style">
        Name:{myObject.myName} & age:{myObject.age} & Place:{myObject.place}
      </h1>
      <button className="btn" onClick={changeObject}>
        Update
      </button>
    </div>
  );
}

export default UseStateObjects;
