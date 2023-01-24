export default function Card({
    degree = "none",
    colour = "green",
    font = "0",
   
}) {
    return (
        <div style={{backgroundColor: colour, fontSize: font}}>
            {
                colour === "green" ? <img src={'person1.jpg'}width="50"/> :
                colour === "purple" ? <img src={'icon/person3.jpg'}width="50"/> :
                                    <img src={'icon/person2.jpg'}width="50"/>
            }
            {degree}

        </div>
    )
}