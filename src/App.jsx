import "./App.css";
import Greetings from "./components/Greetings";
import IdCard from "./components/IdCard";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

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
    </div>
  );
}

export default App;
