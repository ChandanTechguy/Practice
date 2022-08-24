import React, { useState } from "react";

const Basicform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault()
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
    setEmail("")
    setPassword("")
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button type="submit">Login</button>
      </form>

      <div>
        {
        allEntry.map((newEntry) =>{
            return(
                <div className="shoeDtaStyle">
                    <p>{newEntry.email}</p>
                    <p>{newEntry.password}</p>
                </div>
            )
        })
    }
      </div>
    </>
  );
};

export default Basicform;
