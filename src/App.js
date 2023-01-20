import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
        setFilteredMonsters(users);
      });
  }, []);

  const searchMonster = (event) => {
    const searchString = event.target.value;
    const filteredSearchMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });
    setFilteredMonsters(filteredSearchMonsters);
  };
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={searchMonster}
        className="search-box"
        placeholder="Search Monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
