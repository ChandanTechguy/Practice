import React,{useState} from 'react'

const App = ()=>{
const [fullName,setFullNmae] = useState()
const [name,setName] = useState("")
    const inputEvent = (event)=>{
        //console.log(event.target.value)
        setName(event.target.value)
        
    }
    const onSubmit = ()=>{
        setFullNmae(name)
    }
return (
    <>
    <div>
    <form>
    <div>
        <h1>Login {name}</h1>
        <input type="text" placeholder='Enter Your Name' onChange={inputEvent} value={fullName}/>
    
        <button onClick={onSubmit}>Click Here 👈</button>
    </div>
    </form>
    </div>
    </>
)
}
export default App