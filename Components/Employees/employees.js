
export default function Card({
    name = "none",
    colour = "blue",
    font = "0",
    image = "icon/personTwo.png"
}) {
    return (
        <div className="profile" style={{backgroundColor: colour, fontSize: font}}>
            {
                colour === "blue" ? <img src={'person1.jpg'}width="50"/> :
                colour === "blue" ? <img src={'person2.jpg'}width="50"/> :
                                    <img src={'person3.jpg'}width="50"/>
            }
            {name}

        </div>
    )
}