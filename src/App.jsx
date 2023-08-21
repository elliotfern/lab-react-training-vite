import "./App.css";
import Greetings from "./components/Greetings";
import IdCard from "./components/IdCard";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard"

const data = [
  {
    firstName: "Dolores",
    lastName: "Obrien",
    gender: "female",
    height: 172,
    birth: new Date("1971-09-06"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
  },

  {
    firstName: "Doe",
    lastName: "John",
    gender: "male",
    height: 178,
    birth: new Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
]

const dataCreditCard = [
  {
    type: "Visa",
    number: "0123456789018845",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "BNP",
    owner: "Maxence Bouret",
    bgColor: "#11aa99",
    color: "white",
  },

  {
    type: "Master Card",
    number: "0123456789010995",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "N26",
    owner: "Maxence Bouret",
    bgColor: "#eeeeee",
    color: "#222222",
  },

  {
    type: "Visa",
    number: "0123456789016984",
    expirationMonth: 12,
    expirationYear: 2019,
    bank: "Name of the Bank",
    owner: "Firstname Lastname",
    bgColor: "#ddbb55",
    color: "white"
  }
]

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <IdCard data={data[0]} />
      <IdCard data={data[1]} />

      <Greetings lang="de">Ludwig </Greetings>
      <Greetings lang="fr">François </Greetings>
      <Greetings lang="es">Mercedes </Greetings>
      <Greetings lang="en">Raechel </Greetings>

      <Random min={4500} max={6000} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <div className="contenedorCredit">
        <CreditCard dataCreditCard={dataCreditCard[0]} />
        <CreditCard dataCreditCard={dataCreditCard[1]} />
        <CreditCard dataCreditCard={dataCreditCard[2]} />
      </div>


    </div>
  );
}

export default App;
