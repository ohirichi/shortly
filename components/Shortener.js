import {useState, useEffect} from "react"
import axios from "axios"
import Button from "./Button"
import LinkCard from "./LinkCard"

export default function Shortener(props){
    const [state, setState] = useState({
        error:"",
        link:"",
        previousResults:{}
    })
    useEffect(()=>{
        let localStorage = window.localStorage; 
        let results = localStorage.getItem("pastLinks")
        if(results){
            let resultsObj = JSON.parse(results)
            let len = Object.keys(resultsObj).length
            if(len > 5){
                let updatedResultObj = {};
                let i = 0
                for(let key in resultsObj){
                    if(i > len - 5){
                        updatedResultObj[key] = resultsObj[key]
                    }
                    i++
                }
                resultsObj = updatedResultObj;
            }
            setState({...state, previousResults: resultsObj})
        }
        
        
    },[])
    
    const {error, link, previousResults} = state
    const handleChange = (e) =>{
        e.preventDefault()
        setState({...state, link:e.target.value})
    }

    const handleClick = function(e){
        e.preventDefault()
        if(!link.length){
            setState({...state, error:"Please add a link"})
        }
        else{
            axios.post("https://rel.ink/api/links/",{
                url:link
            })
            .then(res => (res.data))
            .then(details => {
                let result = "https://rel.ink/"
                let {hashid, url} = details
                result += hashid
                let updatedResults={}
                let len = Object.keys(state.previousResults).length
                let i = 0
                for(let key in state.previousResults){
                    if(i > len - 5){
                        updatedResults[key] = state.previousResults[key]
                    }
                    i++
                }
                updatedResults[url] = result
                localStorage.setItem("pastLinks", JSON.stringify(updatedResults))
                setState({...state, previousResults:updatedResults})                
            })
            .catch(err =>{ 
                setState({...state,link:"", error:"Please provide a valid url"})
            })
        }
        
    }
    

    return(
        <div>
            <div className="container">
                <form>
                    <div className="input-container">
                        <input className={error.length && !link.length  ? "input-error": ""} onChange={handleChange} value={link} placeholder="Shorten a link here..." />
                        <p className={error.length && !link.length ? "error" : "hidden"}>{error}</p>
                    </div>
                    
                    <div className="button-container">
                        <Button disableActiveState={true} onClick={handleClick} fullWidth={true} shape ="square" text="Shorten it!"/>
                    </div>
                    
                </form>
            </div>
            <div className="links-container">
                {Object.keys(previousResults).reverse().map( (key, index) => 
                    (<div key={index} className="link-holder">
                        <LinkCard initial={key} result={previousResults[key]} />
                    </div>)
                )}
            </div>
            <style jsx>{`
            .container{
                width:100%;
                margin:0;
                padding:0;
                display:flex;
                justify-content:center;
                align-items:center;
                background-image:linear-gradient(white 45%, hsl(225, 33%, 95%) 45%);

            }
             form {
                 max-height:300px;
                 box-sizing:border-box;
                 min-width:90%;
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
                 border: 1px solid hsl(0, 87%, 67%);
             }

             .input-error::placeholder{
                 color:hsl(0, 87%, 67%);
             }
             .hidden {
                 height:1rem;
                 max-height:1rem;
                 visibility:hidden;
             }

             .error {
                 color:hsl(0, 87%, 67%);
                 font-size:.8rem;
                 font-style:italic;
             }

             .links-container{
                background-color: hsl(225, 33%, 95%);
                max-width:100%;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                padding-bottom: 1em;
             }
             .link-holder{
                 padding-top: 1em;
                 min-width:90%;
                 
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