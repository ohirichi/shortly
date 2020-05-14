import {useState, useEffect} from "react"
import axios from "axios"
import Button from "./Button"
import LinkCard from "./LinkCard"

export default function Shortener(props){
    const [error, setError] = useState("")
    const [link, setLink] = useState("")

    const handleChange = (e) =>{
        e.preventDefault()
        setLink(e.target.value)
    }

    const handleClick = function(e){
        e.preventDefault()
        if(!link.length){
            setError("Please add a link")
        }
        else{
            console.log("clicked :D")
        }
        
    }

    return(
        <div>
            <form>
                <div className="input-container">
                    <input className={error.length && !link.length  ? "input-error": ""} onChange={handleChange} value={link} placeholder="Shorten a link here..." />
                    <p className={error.length && !link.length ? "error" : "hidden"}>{error}</p>
                </div>
                
                <div className="button-container">
                    <Button disableActiveState={true} onClick={handleClick} fullWidth={true} shape ="square" text="Shorten it!"/>
                </div>
                
            </form>
            <div className="link-holder">
                <LinkCard initial="www.test.com" result="test.co.m" />
            </div>
            
            <style jsx>{`
             form {
                 min-height:20vh;
                 border:none;
                 background: hsl(257, 27%, 26%) url("/images/bg-shorten-mobile.svg") no-repeat;
                 background-size:100% 20vh;
                 padding: 1em;
                 border-radius:5px;
             }
             .input-container {
                margin-bottom: .5em;
             }
             input{
                 width:100%;
                 padding: .5rem 0;
                 border:none;
                 border-radius:3px;
                 
             }

             input::placeholder{
                text-indent:10px;
             }

             .input-error{
                 border: 1px solid red;
             }

             .input-error::placeholder{
                 color:red;
             }
             .hidden {
                 height:1rem;
                 max-height:1rem;
                 visibility:hidden;
             }

             .error {
                 color:red;
                 font-size:.8rem;
                 font-style:italic;
             }

             .link-holder{
                 margin-top: 1em;
             }

             @media only screen and (min-width:1000px){
                 form{
                     display:flex;
                     flex-direction:row;
                     justify-content:space-between;
                     align-items:center;
                     background: hsl(257, 27%, 26%) url("/images/bg-shorten-desktop.svg") no-repeat;
                     background-size:100% 20vh;
                 }
                 .input-container{
                     width:78%;
                     margin-bottom:0;
                 }

                 .button-container{
                     width:20%;
                     margin-bottom:1rem;
                     
                 }
             }
            `}</style>
        </div>

    )
}