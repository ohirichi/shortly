import Head from "next/head"
import Button from "../components/Button"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Info from "../components/Info"
import Shortener from "../components/Shortener"


export default function Home(){

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
            <Shortener />
            <Info />
            <section className="boost">
                <h2>Boost your links today</h2>
                <Button text="Get Started" />
            </section>
            <Footer />
            <style jsx global>{`
                *{
                    font-family:Poppins;
                    padding:0;
                    margin:0;
                }

                html {
                    font-size: 18px;
                }

                header {
                    max-width:100%;
                    display:flex;
                    flex-direction:column;
                    overflow:hidden;
                    align-items:center;
                    justify-content:center;
                    margin-bottom:2em;
                }

                h1 {
                    font-size: 2rem;
                }

                header img{
                    width: 120%;
                    max-width:150vh;
                    position:relative;
                    left: 10%;
                }

                .headline {
                    box-sizing:border-box;
                    max-width:90%;
                    display:flex;
                    flex-direction: column;
                    text-align:center;
                    padding:1.5em;
                    padding-left:0;
                }

                p {
                    color: hsl(257, 7%, 63%);
                }
                
                .headline p {
                    margin: 1em 0;
                    margin-bottom: 2em;
                }

                .boost {
                    max-width:100vw;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                    height:40vh;
                    position:relative;
                    background:hsl(257, 27%, 26%) url("/images/bg-boost-mobile.svg") no-repeat;
                    background-size:100vw 40vh;
                    color:white;
                    text-align:center;
                }
                .boost h2 {
                    margin-bottom: .5rem;
                }

                @media only screen and (min-width:700px){
                    header{
                        flex-direction:row;
                        padding-left:4em;
                        
                    }
                    h1 {
                        font-size: 2rem;
                    }

                    header div:first-child {
                        order:2;
                        width:50%;
                    }

                    header img {
                        left: 2%;
                    }

                    .headline{
                        order: 1;
                        width:50%;
                        text-align:left;
                        justify-content:center;
                    }

                    .boost {
                        height:30vh;
                        background:hsl(257, 27%, 26%) url("/images/bg-boost-desktop.svg") no-repeat;
                        background-size:100vw 30vh;
                    }
                }

                @media only screen and (min-width: 1200px){
                    html {
                        font-size: 20px;
                    }
                    header{
                        padding-left:4em;
                    }

                    h1{
                        font-size: 3rem;
                    }

                    .headling {
                        font-size:2rem;
                    }
                }
            `}    
            </style>
        </div>
    )
}