"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"

export default function UserForm(){
    interface signUpForm {
        username:string,
        password:string,
        role: string
    }
    const router = useRouter()
    const [formData, setFormData]=useState<signUpForm>({username:'', password:'', role:''});
    const [errorMessage, setErrorMessage]=useState('')

    const handleChange = (e:any) =>{
        const value = e.target.value
        const name = e.target.name;
        setFormData((prevState)=>({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmit = async (e:any) =>{
        e.preventDefault()
        setErrorMessage('')

        const res = await fetch("api/scouts", {
            method: 'POST',
            body: JSON.stringify({formData}),

        })

        if(!res.ok){
            const response = await res.json()
            setErrorMessage(response.message)
        }else{
            router.refresh()
            router.push('/')
        }
    }

    return (<div>
            <form onSubmit={handleSubmit} 
                  method='post' 
                  className="flex flex-col gap-3 w-1/2"
            >
            <h1>Create New User</h1>
            <label>UserName</label>
            <input
                id='username'
                name='username'
                placeholder='example@pds.com'
                type='text'
                onChange={handleChange}
                required={true}
                value={formData.username}
                className="m-2 bg-slate-400 rounded"
            />
            <label>Password</label>
            <input
                id='password'
                name='password'
                type='password'
                onChange={handleChange}
                required={true}
                value={formData.password}
                className="m-2 bg-slate-400 rounded"
            />
            <select 
                id='role'
                name = 'role'
                required = {true}
                value = {formData.role}
            >
                <option key="role" value="role">Scout</option>
                <option key="role" value="role" >Casual</option>
            </select>
             <input
                type='submit'
                value='Create User'
            />
            
            </form>
            <p className="color-red-100">{errorMessage}</p>
            </div>)
}
