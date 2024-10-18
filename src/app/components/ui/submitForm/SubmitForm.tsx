import InputBar from "./InputBar"
// import CustomInputBar from "./CustomInputBar"


export default function SubmitForm() {

  return (
    <div className="relative flex flex-col items-start gap-2 p-6 bg-white border rounded-lg">
      <InputBar inputType="Name"></InputBar>
      <InputBar inputType="age"></InputBar>
      <InputBar inputType="married"></InputBar>

      {/* <CustomInputBar /> */}

      {/* <InputBar inputType="Surname"></InputBar> */}

      {/* <div className="relative flex flex-col items-start self-stretch w-full gap-2 bg-transparent" />

      <p className="leading-[22px] text-base text-[#1e1e1e]">Surname</p>
      <input className="overflow-hidden rounded-lg border border-[#d9d9d9] px-4 py-3 flex gap-0 items-center self-stretch relative w-full bg-white" />
      <p className="leading-4 text-base text-[#b3b3b3]">Value</p>
      <div className="relative flex flex-col items-start self-stretch w-full gap-2 bg-transparent" />
      <p className="leading-[22px] text-base text-[#1e1e1e]">Email</p>

      <input className="overflow-hidden rounded-lg border border-[#d9d9d9] px-4 py-3 flex gap-0 items-center self-stretch relative w-full bg-white" />
      <p className="leading-4 text-base text-[#b3b3b3]">Value</p>

      <div
        className="relative flex flex-col items-start self-stretch w-full gap-2 bg-transparent">
        <p className="leading-[22px] text-base text-[#1e1e1e]">Message</p>
        <textarea
          className="overflow-hidden rounded-lg border border-[#d9d9d9] px-4 py-3 flex gap-0 items-start self-stretch relative w-full bg-white">
          <div>
            <p className="leading-[22px] text-base text-[#b3b3b3]">Value</p><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.52303 0.353546L0.353546 6.52303M6.98067 3.89592L3.89593 6.98066" stroke="#B3B3B3" />
            </svg>
          </div>
        </textarea>
      </div>

      <div
        className="relative flex items-center self-stretch w-full gap-4 bg-transparent">
        <button
          className="overflow-hidden rounded-lg border border-[#2c2c2c] p-3 flex gap-2 justify-center items-center flex-1 relative w-full bg-[#2c2c2c]">
          <span className="text-base leading-4 text-neutral-100"> Submit </span>
        </button>
      </div> */}

    </div>

  )
}