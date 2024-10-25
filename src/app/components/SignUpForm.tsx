"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function SignUpForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  function submit(data: FieldValue) {
    setData(JSON.stringify(data))
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit((data) => submit(data))}>

      <input {...register("firstName")} placeholder="First name" />
      <select {...register("category", { required: true })}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea {...register("aboutYou")} placeholder="About you" />
      <p>{data}</p>
      <input type="submit" />
    </form >
  );
}
