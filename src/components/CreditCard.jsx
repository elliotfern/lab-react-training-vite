
import visa from "./../assets/images/visa.png"
import mastercard from "./../assets/images/master-card.svg"

function CreditCard(props) {
    let img = "";

    const numeroTarjeta = props.dataCreditCard.number.replace(/.(?=.{4})/g, "#");

    const styleCard = {
        backgroundColor: props.dataCreditCard.bgColor,
        color: props.dataCreditCard.color,
    }

    if (props.dataCreditCard.type === "Visa") {
        img = visa;
    } else if (props.dataCreditCard.type === "Master Card") {
        img = mastercard;
    }

    return (
        <div className="creditcard" style={styleCard}>
            <p style={{ textAlign: 'right' }}><img src={img} height="20px"></img></p>
            <p className="creditNumber">{numeroTarjeta}</p>
            <p>Expires {props.dataCreditCard.expirationMonth}/{props.dataCreditCard.expirationYear} {props.dataCreditCard.bank}</p>
            <p> {props.dataCreditCard.owner}</p>

        </div >
    )
}

export default CreditCard