import { PropsWithChildren } from "react"

const AuthLayout = ({children}:PropsWithChildren) => {
  return (
    <div className="min-h-screen w-full my-auto h-full flex justify-center items-center">{children}</div>
  )
}

export default AuthLayout