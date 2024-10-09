"use client"

import { useState } from "react";

import { api } from "@/trpc/react";


function CreateUser() {

    const [name, setName] = useState("")

    const utils = api.useUtils()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        createUser.mutate({ name })
    }

    const createUser = api.user.create.useMutation({
        onSuccess: async () => {
            await utils.user.invalidate()
            setName("")
        },
    })

    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default CreateUser
