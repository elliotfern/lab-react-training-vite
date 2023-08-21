function Greetings(props) {
    let message = "";
    if (props.lang === "fr") {
        message = "Bonjour"
    } else if (props.lang === "es") {
        message = "Hola"
    } else if (props.lang === "de") {
        message = "Hallo"
    } else if (props.lang === "en") {
        message = "Hello"
    }
    return (
        <div className="greetings">
            {message} {props.children} !
        </div>
    )
}

export default Greetings