import Image from "next/image";
type PokemonImage = {
  params: {
    image: string,
    name: string
  };
};
export default function PokemonImage ({params} : PokemonImage) {
  return (
    <div>
          <Image
            // className={styles.picture}
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${params.image}`}
            alt={params.name}
            width={100}
            height={100}
          />
        </div>
  );
}