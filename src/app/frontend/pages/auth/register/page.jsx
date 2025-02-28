"use client"
import React from 'react'
import {useForm} from 'react-hook-form'

function RegisterPage() {

    const {register, handleSubmit} = useForm();   
    const onSubmit = handleSubmit(data => {console.log(data)})

  return (
    <div>

        <form onSubmit={onSubmit}>
            <input type="text" {...register ("username", {required: true,})} />
            <input type="email" {...register ("email", {requided: true,})} />
            <input type="password" {...register("password", {required: true,})} /> 
            <input type="confirmPassword" {...register("confirmPassword", {required: true})} />
            <button>Register</button>
        </form>

    </div>
  )
}

export default RegisterPage