import { RegisterOptions, UseFormRegister } from "react-hook-form"

interface InputProps {
  type: string
  placeholder: string
  name: string
  register: UseFormRegister<any>
  error?: string
  rules?: RegisterOptions
}

export default function Input({
  name,
  placeholder,
  type,
  register,
  rules,
  error,
}: InputProps) {
  const className = `w-full border-2 rounded-md h-11 px-2 ${
    error ? "border-red-300" : ""
  }`
  return (
    <div>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="my-1 text-red-500">{error}</p>}
    </div>
  )
}
