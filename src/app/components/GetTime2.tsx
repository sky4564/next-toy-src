async function getTime() {
  await new Promise((resolve) => setTimeout(resolve, 6000))
  return 'dummy data from api '
}

export default async function GetTime2() {
  console.log(`Fetching movies: ${Date.now()}`);

  const res = await getTime()

  return (
    <div>
      result : {res}
    </div>
  )
}