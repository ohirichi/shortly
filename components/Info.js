import Card from "./Card"

export default function Info(props){

    const titles =["Brand Recognition", "Detailed Records", "Fully Customizable"]
    const descriptions = [
        `Boost your brand recognition with each click. Generic links don’t 
        mean a thing. Branded links help instil confidence in your content.`,
        `Gain insights into who is clicking your links. Knowing when and where 
        people engage with your content helps inform better decisions.`,
        `Improve brand awareness and content discoverability through customizable 
        links, supercharging audience engagement.`
    ]
    const imgSources= ["icon-brand-recognition.svg", "icon-detailed-records.svg", "icon-fully-customizable.svg"]
    return(
        <div>
            <div className="container">
                <div className="heading">
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our 
    advanced statistics dashboard.</p>
                </div>
                
                <div className="card-container">
                    {titles.map((title, index )=> <div key={title} offset={index * 10}><Card imgSrc={"/images/" + imgSources[index]} title={title} description={descriptions[index]} /></div>)}
                </div>
            </div>
            <style jsx>{`
                .container{
                    background-color: hsl(257, 7%, 63%);
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    padding: 2em 1em;
                    padding-bottom: 4em;

                }

                .card-container{
                    display:flex;
                    flex-direction: column;
                    justify-content:space-between;
                    align-items:center;
                    position:relative;
                }

                .card-container::after {
                    content:"";
                    width: 5px;
                    background-color:hsl(180, 66%, 49%);
                    height:80%;
                    position:absolute;
                    top:10%;
                    z-index:1;
                }

                .card-container div {
                    margin: .5rem;
                    padding-top:50px;
                    position:relative;
                }
                .heading {
                    display: flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                    margin:1em;
                    text-align:center;
                }

                h2 {
                    margin-bottom: 1em;
                }

                @media only screen and (min-width: 1000px){
                    .card-container{
                        flex-direction: row;
                        padding-bottom: 3em;
                    }

                    .card-container::after {
                        width: 80%;
                        height:5px;
                        top:50%;
                        left:10%;
                    }
                    
                    
                    .card-container div:nth-child(2){
                        top: 50px;
                    }
                    .card-container div:last-child{
                        top: 100px;
                    }

                }
            `}</style>
            
        </div>
    )
}