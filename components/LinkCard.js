import {useRef} from "react"
import Button from "./Button"

export default function LinkCard(props){
    const {initial, result} = props
    const textEl = useRef(null)
    const handleCopy = function(e){
        e.preventDefault()
        textEl.current.select()
        document.execCommand('copy')

    }

    return(
        <div>
            <div className="card">
                <p className="initial" title={initial}>{initial.substring(0,25)+"..."}</p>
                <div>
                    <input className="result" ref={textEl} readOnly value={result}/>
                    <div className="button-container">
                        <Button onClick={handleCopy} shape="square" fullWidth={true} text="Copy" activeText="Copied!"/>
                    </div>
                </div>
                
            </div>
            <style jsx>{`
                *{
                    box-sizing:border-box;
                    margin:0;
                    padding:0;
                }
                .card{
                    border-radius: 5px;
                    background-color:white;
                    display:flex;
                    flex-direction:column;
                    align-items:flex-start;
                    width:100%;
                    padding: 1em;
                    max-width:100%;
                    overflow:hidden;
                    font-size:.8rem;

                }

                .initial{
                    color:black;
                    width:120%;
                    border-bottom: 1px solid gray;
                    position:relative;
                    left:-10%;
                    text-indent:8%;
                    padding-bottom: .3em;
                }

                .card div {
                    width: 100%;
                }
                .result {
                    color:hsl(180, 66%, 49%);
                    width:100%;
                    padding:.5em 0;
                    border:none;
                    font-size:.8rem;
                }

                .result:focus{
                    outline:0;
                }
                .button-container{
                    min-width:100%;

                }

                @media only screen and (min-width:1000px){
                    .card{
                        
                        flex-direction:row;
                    }

                    .initial {
                        width:65%
                        min-width: 65%;
                        border-bottom:none;
                        left:0;
                        text-indent:0;
                        padding:.5em 0;
                    }

                    .result {
                        min-width:70%;
                        text-align:right;
                        margin-right:1em;
                    }

                    .card > div {
                        display:flex;
                        flex-direction:row;

                    }
                    .button-container{
                        min-width:15%;
                        
                        
                    }
                }
            `}</style>
        </div>
    )
}