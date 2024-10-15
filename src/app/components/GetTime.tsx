async function getTime() {
  await new Promise((resolve) => setTimeout(resolve, 600))
  return 'data from api getTime1 Data'
}

export default async function GetTime() {
  console.log(`Fetching movies: ${Date.now()}`);

  const res = await getTime()
  return (
    <div>
      result : {res}
    </div>
  )
}