const { useState, useEffect } = React;

function App() {
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(response => {
      setPokemon(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <h1>{pokemon.name}</h1>
      <ul className="list-group">
          {response.data.map((item, index) => (
            <li key={item.index} className="list-group-item">
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      {/* <img alt={pokemon.name} src={pokemon.sprites.front_default} /> */}
    </div>
  );
}

//doesn't work mon
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));