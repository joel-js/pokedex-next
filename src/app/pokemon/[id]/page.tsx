import Image from "next/image";
import { Suspense } from "react";

import PokemonImage from "@/components/pokemon-image";

type PostPageProps = {
  params: {
    id: string | number;
  };
};

export default async function PostPage({ params }: PostPageProps) {
  const response = await fetch(
    `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`
  );
  const post = await response.json();

  return (
    <main className="px-7 pt-24 text-left">
      <h1 className="text-5xl font-semibold mb-7">{post.name}</h1>
      <Suspense fallback="Loading...">
      <PokemonImage params={{ image: post.image, name: post.name.english }} />
      </Suspense>
      {post.stats.map((stat: any, i: number) => (
        <p key={i} className="max-w-[700px] mx-auto">
          {post.stats[i].name} : {post.stats[i].value}
        </p>
      ))}
    </main>
  );
}
