import {useState} from "react"

export default function Button(props){
    const {text, activeText, shape, size, primary, onClick, fullWidth, href} = props
    const [clicked, setClicked] = useState(false)

    const handleClick = function(e){
        e.preventDefault()
        setClicked(true)
    }

    return(
        <div onClick={onClick ? e => onClick(e) : null}>
            {href ? <a href={href}>{text}</a>:
            <button className={clicked ? "clicked" : ""} onClick={handleClick} onMouseOver={e => setClicked(false)}>{clicked && activeText ? activeText : text}</button>}
            <style jsx>{`
                a, button{
                    font-family: 'Poppins', sans-serif;
                    ${fullWidth ? "width:100%;" : ""}
                    color:white;
                    border:none;
                    padding: ${size === "sm" ? ".5rem 1.5rem" :".8rem 2.5rem"};
                    font-weight:${primary ? 700: 500};
                    background:hsl(180, 66%, 49%);
                    border-radius:${shape === "square" ? "3px" : "25px"};
                    
                }

                a:hover, button:hover{
                    background:hsl(180, 59%, 75%);
                }

                button:focus {
                    outline:0;
                    ${clicked ? "background: hsl(257, 27%, 26%);": ""}
                    
                }
                .clicked{
                    background:hsl(257, 27%, 26%);
                }
                a{
                    text-decoration:none;
                    color:white;
                }
            
            `}

            </style>
        </div>
        
    )
}