import { getPokemonByName } from '../../utils/lib';
import capitalize from 'lodash/capitalize';

export default async function Page({
  params: { name },
}: {
  params: { name: string };
}) {
  const pokemon = await getPokemonByName(name);
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        style={{ imageRendering: 'pixelated' }}
        src={pokemon.sprites.front_default}
        height="280"
        width="280"
        alt=""
      />
      <h1 className="text-2xl font-bold">{capitalize(pokemon.name)}</h1>
    </div>
  );
}
