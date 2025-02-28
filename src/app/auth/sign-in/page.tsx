import React, { PropsWithChildren } from 'react'
import SignInForm from '../_components/SignInForm'
import Link from 'next/link'
import { API_URL } from '@/lib/constants'

const SignInPage = () => {
  return (
    <div className="container w-[90%] md:w-[30%]  flex flex-col justify-center items-center">
      <h2 className="text-sm">Daxil ol</h2>
      <div className="w-full">
        <SignInForm />
        <Link href={"/auth/forgot"}>Forgot Your Password?</Link>
        <div className="flex items-center justify-center gap-2 mt-2">
        <p className="text-sm text-slate-500 font-normal">Hesab yaratmamısınız?</p>
          <a className="font-semibold text-xs underline text-blue-500" href="/auth/sign-up">Qeydiyyatdan keç</a>
        </div>
      </div>
    </div>
  )
}

export default SignInPage