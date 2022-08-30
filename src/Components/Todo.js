import React from 'react'
import   "../App.css"
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const Todo = () => {
  return (
    <>
    <div className="main-div">
        <div className="child-div">
            <figure>
                <img src='https://th.bing.com/th/id/R.e7b13405b0049f60896ddf9853dd413b?rik=LV9vAbjYW5DQWg&riu=http%3a%2f%2fwww.nationaldebtlaw.com%2fwp-content%2fuploads%2f2016%2f09%2fto-do-e1413478675425.jpg&ehk=0xaJhL2HcK41HagCOnSRnduDux9JbxFMWKqkcHBJM%2fs%3d&risl=&pid=ImgRaw&r=0' alt="todoLogo"></img>
                <figcaption><strong>Add your list here 👌</strong></figcaption>
            </figure>
            <div className="addItems">
                <input type="text" placeholder='✍️ add your items....'></input>
               <AiOutlinePlus  title="Add Item" style={{height:"35px", width:"35px", position:"absolute", marginTop:'25px', marginLeft:"-35px"}} />

            </div>
            <div className='showItems'>
                <div className='eachItem'>
                    <h3>Messi</h3>
                    <MdDelete title="Add Item" style={{height:"35px", width:"35px" }}/>
                
                </div>

            </div>

        </div>

    </div>
    </>
  )
}

export default Todo