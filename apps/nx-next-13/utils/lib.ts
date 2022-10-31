import { NamedAPIResourceList, Pokemon } from '../app/types';
import { POKE_API_ROOT } from './constants';

export async function getPokemonByName(name: string): Promise<Pokemon> {
  const res = await fetch(POKE_API_ROOT + `/${name}`, {
    cache: 'force-cache',
  });
  return res.json();
}

export async function getPokemonList(): Promise<NamedAPIResourceList> {
  const response = await fetch(POKE_API_ROOT + '?limit=100000&offset=0', {
    cache: 'force-cache',
  });

  return response.json();
}
