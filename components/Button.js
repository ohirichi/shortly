import {useState} from "react"

export default function Button(props){
    const {text, activeText, shape, size, primary} = props
    const [clicked, setClicked] = useState(false)

    const handleClick = function(e){
        e.preventDefault()
        setClicked(true)
    }

    return(
        <div>
            <button className={clicked ? "clicked" : ""} onClick={handleClick} onMouseOver={e => setClicked(false)}>{clicked && activeText ? activeText : text}</button>
            <style jsx>{`
                button{
                    font-family: 'Poppins', sans-serif;
                    margin: .5rem;
                    color:white;
                    border:none;
                    padding: ${size === "sm" ? ".5rem 1.5rem" :".8rem 2.5rem"};
                    font-weight:${primary ? 700: 500};
                    background:hsl(180, 66%, 49%);
                    border-radius:${shape === "square" ? "3px" : "25px"};
                }

                button:hover{
                    background:hsl(180, 59%, 75%);
                }

                button:focus {
                    outline:0;
                    background:${clicked ? "hsl(257, 27%, 26%)": "hsl(180, 66%, 49%)"};
                    
                }
                .clicked{
                    background:hsl(257, 27%, 26%);
                }
            
            `}

            </style>
        </div>
        
    )
}