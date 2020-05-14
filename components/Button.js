import {useState} from "react"

export default function Button(props){
    const {text, disableActiveState, activeText, shape, size, primary, onClick, fullWidth, href} = props
    const [clicked, setClicked] = useState(false)

    const handleClick = function(e){
        e.preventDefault()
        setClicked(true)
    }
    
    return(
        <div onClick={onClick ? e => onClick(e) : null}>
            {href ? <a href={href}>{text}</a>:
            <button className={clicked && !disableActiveState ? "clicked" : ""} onClick={handleClick} onMouseOver={e => setClicked(false)}>{clicked && activeText ? activeText : text}</button>}
            <style jsx>{`
                a, button{
                    font-family: 'Poppins', sans-serif;
                    ${fullWidth ? "width:100%;" : ""}
                    color:white;
                    border:none;
                    padding: ${size === "sm" ? ".3rem 1.1rem" :".5rem 2rem"};
                    font-weight:${primary ? 700: 500};
                    background:hsl(180, 66%, 49%);
                    border-radius:${shape === "square" ? "3px" : "25px"};
                    font-size: .8rem;
                    text-align:center;
                }

                
                button:focus {
                    outline:0;
                    ${clicked && !disableActiveState ? "background: hsl(257, 27%, 26%);": ""}
                    
                }
                .clicked{
                    background:hsl(257, 27%, 26%);
                }

                
                a{
                    text-decoration:none;
                    color:white;
                }

                a:hover, button:hover{
                    background:hsl(180, 59%, 75%);
                }

                a:hover.clicked, button:hover.clicked {
                    background:hsl(257, 27%, 26%);
                }

            
            `}

            </style>
        </div>
        
    )
}