"use client"

import { useActionState } from "react"
import GenericPostForm from "./GenericPostForm"
import { saveNewPost } from "@/lib/actions/postAction"

const PostFormContainer = () => {
const [state,action] = useActionState(saveNewPost,undefined)
  return (
    <div>
        <GenericPostForm formAction={action} state={state}/>
    </div>
  )
}

export default PostFormContainer