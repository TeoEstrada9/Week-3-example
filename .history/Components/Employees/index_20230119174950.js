export default function Card({
    name = "none",
    colour = "purple",
    font = "0",
    image = "icon/personTwo.png"
}) {
    return (
        <div style={{backgroundColor: colour, fontSize: font}}>
            {
                colour === "green" ? <img src={'icon/person.png'}width="50"/> :
                colour === "purple" ? <img src={'icon/personThree.png'}width="50"/> :
                                    <img src={'icon/person.png'}width="50"/>
            }
            {degree}

        </div>
    )
}