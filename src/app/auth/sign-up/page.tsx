import SignUpForm from "../_components/SignUpForm"

const SignUpPage = () => {
  return (
    <div className="container w-[90%] md:w-[30%]">
      <h2 className="font-normal text-center">Qeydiyyat</h2>
      <div>
      <SignUpForm/>
       <div className="flex items-center justify-center gap-2 mt-2">
        <p className="text-sm text-slate-500 font-normal">Hesabınız var?</p>
        <a className="font-semibold text-xs underline text-blue-500" href="/auth/sign-in">Daxil ol</a>
       </div>
      </div>
    </div>
  )
}

export default SignUpPage