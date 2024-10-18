export default function inputBar({ inputType }: { inputType: string }) {
  return (
    <>
      <p className="text-red-800">{inputType}</p>
      <input placeholder="Value" className="p-4 border-4 rounded-[10rem] text-blue-800" />
    </>
  )
}