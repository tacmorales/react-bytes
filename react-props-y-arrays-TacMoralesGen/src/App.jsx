import PersonCard from "./component/PersonCard";
import "./App.css";

const personList = [
  {
    id: "01",
    name: "Jose",
    username: "jose45",
    email: "jose@email.com",
    img: "https://avatar.iran.liara.run/public/5",
  },
  {
    id: "02",
    name: "Luis",
    username: "lucho45",
    email: "luis@email.com",
    img: "https://avatar.iran.liara.run/public/31",
  },
  {
    id: "03",
    name: "Cata",
    username: "cate10",
    email: "cata@email.com",
    img: "https://avatar.iran.liara.run/public/64",
  },
  {
    id: "04",
    name: "Claudio",
    username: "claudio643",
    email: "claudio@email.com",
    img: "https://avatar.iran.liara.run/public/17",
  },
];

function App() {
  return (
    <>
      <h1>Personas</h1>
      <section className="container-cards">
        {personList.map((person) => {
          return (
            <PersonCard
              key={person.id}
              name={person.name}
              username={person.username}
              email={person.email}
              img={person.img}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
