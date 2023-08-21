function Random(props) {
    let min = props.min;
    let max = props.max

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div className="randonNumber">
            <p>Random value between {min} and {max} is  {randomNumber}</p>
        </div>
    )
}

export default Random