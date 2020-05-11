import Button from "./Button"
// import  test from "../assets/images/logo"

export default function Navbar(props){

    return(
        <div>
            <nav>
                <img className="logo" src="/images/logo.svg" alt="shortly" />
                <div className="burger">
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
                            <Button text="Sign Up" size="sm" />
                        </div>
                    </ul>

                </div>
            </nav>
            <style jsx>{`
                ul{
                    list-style:none;
                    
                }
                a {
                    text-decoration:none;
                }
            `}
            </style>
        </div>
    )
}