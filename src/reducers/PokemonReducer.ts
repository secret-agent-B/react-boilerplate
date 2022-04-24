import {
  PokemonDispatchTypes,
  PokemonType,
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
} from '../action/PokemonActionTypes';

export interface IDefaultState {
  loading: boolean;
  pokemon?: PokemonType;
}

const defaultState: IDefaultState = {
  loading: false,
};

const pokemonReducer = (
  state: IDefaultState = defaultState,
  action: PokemonDispatchTypes
): IDefaultState => {
  switch (action.type) {
    case POKEMON_LOADING:
      return {
        loading: true,
      };
    case POKEMON_FAIL:
      return {
        loading: false,
      };
    case POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
