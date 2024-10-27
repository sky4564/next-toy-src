import SignUpForm from "@/app/components/SignUpForm"



export default function SignPage() {
  return (
    <>

      <div className="flex flex-col w-full items-center  justify-center gap-5">
        <h2>회원 가입 </h2>
        <SignUpForm />
      </div>
    </>
  )
}

