export default function Card({
    degree = "none",
    colour = "purple",
    font = "0",
    image = "icon/personTwo.png"
}) {
    return (
        <div style={{backgroundColor: colour, fontSize: font}}>
            {
                colour === "red" ? <img src={'icon/person.png'}width="50"/> :
                color === "blue" ? 

            }
            {degree}

        </div>
    )
}