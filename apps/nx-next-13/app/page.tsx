import { getPokemonList } from '../utils/lib';
import PokemonButton from './components/atom/PokemonButton';

const Page = async () => {
  const pokemonList = await getPokemonList();

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <PokemonButton pokemonList={pokemonList} />
    </div>
  );
};

export default Page;
