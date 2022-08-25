 import React from 'react'
 //import UseStateArray from './Components/UseStateArray'
 //import UseStateObjects from './Components/UseStateObjects'
 //import Basicform from './Components/Form/Basicform'
 import UseEffect from './Components/useEffect/UseEffect'
 const App = () => {
  // let myFirstVal = useState('dass')[0]
  // console.log(myFirstVal)
  // var val = 'Chandan'
 // const [myName,setMyName] = useState("Chandan Das")

  // const changeName = () => {
  //   let val = myName
  //   if(val === "Chandan Das"){
  //     setMyName ("Das Chandan")
  //   }else{
  //     setMyName (" Chandan Das")
  //   }
  // }
 // console.log(myName)
   return (
     <div>
      {/* <h1>{myName}</h1>
      <button className='btn' onClick={changeName}>Click Me</button> */}
      {/* <UseStateArray/> */}
      {/* <UseStateObjects/> */}
      {/* <Basicform/> */}
      <UseEffect/>
     </div>
   )
 }
 
 export default App