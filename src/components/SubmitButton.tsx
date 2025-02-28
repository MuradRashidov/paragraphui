"use client"
import React from 'react'
import { Button, ButtonProps } from './ui/button'
import { useFormStatus } from 'react-dom'
import Link from 'next/link'
import { API_URL } from '@/lib/constants'

const SubmitButton = ({ children, ...props }: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <>
      <Button variant="destructive">
        <Link href={`${API_URL}auth/google/login`}>
           Google ilə davam edin
        </Link>
      </Button>
      <Button type="submit" aria-disabled={pending} {...props}>
        {pending ? (<span className="animate-pulse">Submitting</span>) : children}
      </Button>
    </>
  )
}

export default SubmitButton