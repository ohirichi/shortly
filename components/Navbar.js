import {useState} from "react"
import Button from "./Button"
// import  test from "../assets/images/logo"

export default function Navbar(props){
    const [clicked, setClicked] = useState(false)

    return(
        <div className="container">
            <nav>
                <img className="logo" src="/images/logo.svg" alt="shortly" />
                <div className="burger" onClick = {e => setClicked(!clicked)}>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </div>
                <div className="nav-links">
                    <ul>
                        <div>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Resources</a></li>
                        </div>
                        <div>
                            <li><a href="#">Login</a></li>
                            <Button  primary text="Sign Up" size="sm" fullWidth />
                        </div>
                    </ul>

                </div>
            </nav>
            <style jsx>{`
                nav {
                    max-width:100vw;
                    display: grid;
                    margin: 1rem 1rem;
                    grid-template-columns: 100px auto;
                    grid-template-rows:auto;
                    grid-template-areas: 
                    "logo main";
                    align-items:center;
                    position:relative;
                    padding-top:1em;
                    padding: 1em;
                    
                }
                .logo{
                    max-width:100px;
                    grid-area:logo;
                }
                .burger {
                    grid-area:main;
                    place-self: center end;
                }
                .burger div {
                    width: 24px;
                    height: 2px;
                    background-color:hsl(0, 0%, 75%);
                    margin:4px;
                    
                }
                .nav-links{
                    position:absolute;
                    z-index:1000;
                    margin-top:1.5rem;
                    width:100%;
                    top:20px;
                    transform: scaleY(0);
                    transform-origin: 0 0 0;
                    transition: transform 0.3s ease;
                    ${clicked ? "transform:scaleY(1);" : ""}
                }
                ul{
                    list-style:none;
                    background-color:hsl(257, 27%, 26%);
                    border-radius:5px;
                    padding: 25px;
                    display:flex;
                    flex-direction:column;
                    text-align:center;
                    font-weight: 700;
                    font-size:1rem;
                    
                    
                }

                ul div:first-child{
                    border-bottom: 1px solid hsla(0, 0%, 75%, 0.1);
                }

                ul li {
                    margin: 2em .5em;
                }
                a {
                    color:white;
                    text-decoration:none;
                }

                a:hover{
                    color: black;
                }
                @media only screen and (min-width: 700px){
                    nav{
                        padding: 2em;
                        
                        
                    }

                    .burger {
                        display: none;
                    }
                    .nav-links {
                        margin:0;
                        position:static;
                        grid-area:main;
                        transform:scaleY(1);
                    }
                    ul {
                        flex-direction: row;
                        background:none;
                        justify-content:space-between;
                        padding: 0;
                        margin-left:10px;
                        font-size:.8rem;
                        
                        
                    }
                    ul div {
                        display:flex;
                        flex-direction:row;
                        align-items:center;
                    }

                    ul div:first-child {
                        border: none;
                    }
                    a {
                        color: hsl(0,0%,75%);
                    }
                }

                @media only screen and (min-width: 1200px){
                    nav{
                        padding: 2em 4em;
                    }
                }
            `}
            </style>
        </div>
    )
}