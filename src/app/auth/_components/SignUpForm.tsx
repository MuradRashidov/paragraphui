"use client"
import SubmitButton from '@/components/SubmitButton'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignUp } from '@/lib/actions/auth'
import React, { useActionState } from 'react'
import { useFormState } from 'react-dom'

const SignUpForm = () => {
const [state,action] = useActionState(SignUp,undefined)
  return (
    <form action={action} onSubmit={() => console.log("Triggered")
    } className="flex flex-col gap-2">
        {!!state?.message && <p className="text-sm text-red-500 font-semibold">{state.message}</p>}
        <div>
            <Label htmlFor="name">Name</Label>
            <Input defaultValue={state?.data?.name} id="name" name="name" placeholder="Murad"/>
            {!!state?.errors?.name && <p className="text-sm text-red-500 font-semibold">{state.errors.name}</p> }
        </div>
        <div>
            <Label htmlFor="email">Email</Label>
            <Input defaultValue={state?.data?.email} id="email" name="email" placeholder="muradrashidov@gmail.com"/>
            {!!state?.errors?.email && <p className="text-sm text-red-500 font-semibold">{state.errors.email}</p> }

        </div>
        <div>
            <Label htmlFor="password">Şifrə</Label>
            <Input defaultValue={state?.data?.password} id="password" name="password" placeholder="A1q2w3e4r%!"/>
            {state?.errors?.password?.map(err => <p key={err} className="text-sm text-red-500 font-semibold">{err}</p>) }

        </div>
        <SubmitButton>Qeydiyyatdan keç</SubmitButton>
    </form>
  )
}

export default SignUpForm