import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count >=1){
        document.title = `chats (${count})`
    }else{
        document.title = `chats`
    }
    
  });
  console.log("this is console.log");

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default UseEffect;
