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
            <header>
                <div className="hero-image-container">
                    <img src="/images/illustration-working.svg" />
                </div>
                <div className="headline">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
                    <Button text="Get Started" />
                </div>
            </header>
            <section></section>
            <section></section>
            <section className="boost">
                <h2>Boost your links today</h2>
                <Button text="Get Started" />
            </section>
            <Button shape="circle" text="Sign Up" size="sm" activeText="Signed Up!" onClick={handleClick} />
            <Button shape="circle" text="Get Started" primary />
            <style jsx global>{`
                *{
                    font-family:Poppins;
                    padding:0;
                    margin:0;
                }

                .boost {
                    width:100vw;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                    height:40vh;
                    position:relative;
                    border:1px solid red;
                    background:hsl(257, 27%, 26%) url("/images/bg-boost-mobile.svg") no-repeat;
                    background-size:100vw 40vh;
                    color:white;
                    text-align:center;
                }
                .boost h2 {
                    margin-bottom: .5rem;
                }
            `}    
            </style>
        </div>
    )
}