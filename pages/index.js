import Head from "next/head"
import Button from "../components/Button"
import Navbar from "../components/Navbar"


export default function Home(){
    const handleClick = e => {
        e.preventDefault()
        console.log("clicked")
    }
    return(
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet"/> 
            </Head>
            <Navbar />
            <Button shape="circle" text="Sign Up" size="sm" activeText="Signed Up!" onClick={handleClick} />
            <Button shape="circle" text="Get Started" primary />
        </div>
    )
}