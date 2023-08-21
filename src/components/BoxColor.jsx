function BoxColor(props) {
    const { r, g, b } = props;

    const boxColorStyles = {
        backgroundColor: `rgb(${r},${g},${b})`
    }

    return (
        <div className="BoxColor" style={boxColorStyles}>
            <p>rgb({r}, {g}, {b})</p>
        </div>
    )
}

export default BoxColor