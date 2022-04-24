export const POKEMON_LOADING = 'POKEMON_LOADING';
export const POKEMON_FAIL = 'POKEMON_FAIL';
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';

export type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprite;
  stats: PokemonStat[];
};

export type PokemonAbility = {
  name: string;
  url: string;
};

export type PokemonSprite = {
  front_default: string;
};

export type PokemonStat = {
  base_state: number;
  stat: {
    name: string;
  };
};

export interface PokemonLoading {
  type: typeof POKEMON_LOADING;
}

export interface PokemonFail {
  type: typeof POKEMON_FAIL;
}

export interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS;
  payload: PokemonType;
}

export type PokemonDispatchTypes =
  | PokemonLoading
  | PokemonFail
  | PokemonSuccess;
