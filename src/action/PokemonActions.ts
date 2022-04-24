import axios from 'axios';
import { Dispatch } from 'redux';
import {
  PokemonDispatchTypes,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
  POKEMON_FAIL,
  PokemonSuccess,
} from './PokemonActionTypes';

export const getPokemon =
  (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
      dispatch({
        type: POKEMON_LOADING,
      });

      const httpResponse = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );

      const response: PokemonSuccess = {
        type: POKEMON_SUCCESS,
        payload: {
          abilities: httpResponse.data.abilities.map(
            (item: any) => item.ability
          ),
          sprites: httpResponse.data.sprites,
          stats: httpResponse.data.stats,
        },
      };

      dispatch(response);
    } catch (e) {
      dispatch({
        type: POKEMON_FAIL,
      });
    }
  };
