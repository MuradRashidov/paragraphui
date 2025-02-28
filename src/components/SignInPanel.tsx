import Link from 'next/link'
import React from 'react'

const SignInPanel = () => {
  return (
    <>
      <Link href="/auth/sign-in">Daxil ol</Link>
      <Link href="/auth/sign-up">Qeydiyyat</Link>
    </>
  )
}

export default SignInPanel