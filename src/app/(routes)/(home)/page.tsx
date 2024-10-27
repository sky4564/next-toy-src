// const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// async function getMovies() {
//   const res = await fetch(URL);
//   const json = await res.json()
//   return json
// }

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // const info = await getMovies()

  return (
    <>
      this is home
    </>
  )
}
