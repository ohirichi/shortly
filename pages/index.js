import Head from "next/head"
import Button from "../components/Button"


export default function Home(){
    return(
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet"/> 
            </Head>
            <Button shape="circle" text="Sign Up" size="sm" activeText="Signed Up!" />
            <Button shape="circle" text="Get Started" primary />
        </div>
    )
}