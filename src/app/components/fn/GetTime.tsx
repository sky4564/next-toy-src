async function getTime() {
  console.log(`Fetching data: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 600))
  return 'data from api getTime1 Data'
}

export default async function GetTime() {
  const res = await getTime()
  return (
    <div>
      result : {res}
    </div>
  )
}