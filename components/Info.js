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
                <h3>Advanced Statistics</h3>
                <p>Track how your links are performing across the web with our 
    advanced statistics dashboard.</p>
                <div className="card-container">
                    {titles.map((title, index )=> <div key={title}><Card imgSrc={"/images/" + imgSources[index]} title={title} description={descriptions[index]} /></div>)}
                </div>
            </div>
            <style jsx>{`
                .container{
                    background-color:hsl(257, 7%, 63%);
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                }

                .card-container{
                    display:flex;
                    flex-direction: column;
                    justify-content:space-between;
                    align-items:center;
                }

                .card-container div {
                    margin: .5rem;
                    padding-top:50px;
                }
            `}</style>
            
        </div>
    )
}