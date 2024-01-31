import PostsList from "@/components/posts-list";

export default async function PostsPage() {
  const response = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json",
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-5xl font-semibold mb-7">All Pokemons</h1>

      <PostsList posts={data} />
    </main>
  );
}
