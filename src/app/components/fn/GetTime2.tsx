async function getTime() {
  console.log(`Fetching data: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 6000))
  // return 'dummy data from api '
  throw new Error('is something wrong!')
}

export default async function GetTime2() {
  const res = await getTime()

  return (
    <div>
      result : {res}
    </div>
  )
}