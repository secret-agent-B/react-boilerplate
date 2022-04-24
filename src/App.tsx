import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from './action/PokemonActions';
import { RootStore } from './Store';

const App = () => {
  const dispatch: any = useDispatch();
  const [pokemonName, setPokemonName] = useState<string>('');
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(event.target.value);
  const handleSubmit = () => {
    dispatch(getPokemon(pokemonName));
  };

  console.log('pokemon state:', pokemonState);

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt="" />
          {pokemonState.pokemon.abilities.map((ability, i) => {
            return <p key={ability.name}>{ability.name}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
