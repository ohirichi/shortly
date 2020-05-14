
export default function Card (props){
    const {imgSrc, title, description} = props

    return(
    <div>
        <div className="card">
            <div className="badge">
                <img src={imgSrc ? imgSrc : ""} />
            </div>
            <h3>{title ? title : ""}</h3>
            <p className="description">{description ? description : ""}</p>
        </div>
        <style jsx>{`
            .card {
                max-width:310px;
                max-height: 300px;
                min-height:250px;
                position:relative;
                text-align: center;
                background-color:white;
                border-radius:3px;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:space-between;
                padding: 1em;
                padding-bottom:1.5em;
                z-index:10;
            }

            p {
                color:hsl(0, 0%, 75%);
                height:40%;
                font-size:.9rem;
            }

             h3 {
                 margin-bottom: .5em;
                 color: hsl(255, 11%, 22%);
             }
            .badge {
                width: 80px;
                height:80px;
                position:absolute;
                top: -40px;
                left:calc(50% - 40px);
                display:flex;
                justify-content:center;
                align-items:center;
                border-radius: 50%;
                background-color:hsl(257, 27%, 26%);

            }
            @media only screen and (min-width:650px){
                .card{
                    max-height:250px;
                    text-align:left;
                }
            }

            @media only screen and (min-width:1200px){
                .badge{
                    left: 10%;
                }

                .card{
                    max-width: 350px;
                }
            }

            @media only screen and (min-width:1200px){
                p{
                    font-size:.8rem;
                }
            }
        `}</style>
    </div>)
}