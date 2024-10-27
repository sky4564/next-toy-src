import InputBar from "./InputBar"
// import CustomInputBar from "./CustomInputBar"


export default function SubmitForm() {

  return (
    <div className="relative flex flex-col items-start gap-2 p-6 bg-white border rounded-lg">
      <InputBar inputType="Name"></InputBar>
      <InputBar inputType="age"></InputBar>
      <InputBar inputType="married"></InputBar>
    </div>

  )
}