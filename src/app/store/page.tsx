import InputBar from "../components/ui/submitForm/InputBar"

export default async function Store() {

  return (
    <div>
      <h1>기본 음식점 페이지</h1>
      <p>무엇을 먹고 싶습니까 ? </p>
      <InputBar inputType="음식점"></InputBar>
    </div>
  )
}