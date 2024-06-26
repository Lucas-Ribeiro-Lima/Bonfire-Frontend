// 'use client'

// import { LockIcon } from 'lucide-react'
// import { useForm } from 'react-hook-form'

// import Link from 'next/link'

// export interface LoginFormInput {
//   username: string
//   password: string
//   rememberMe: boolean
// }

// async function handleSignIn({
//   username,
//   password,
//   rememberMe,
// }: LoginFormInput) {}

// const LoginForm = () => {
//   const { register, handleSubmit } = useForm<LoginFormInput>()

//   return (
//     <form
//       onSubmit={handleSubmit(handleSignIn)}
//       className="flex flex-col items-center gap-4"
//     >
//       <div className="relative mr-auto text-xl">Sign in to your account</div>
//       <div className="flex flex-col -space-y-px rounded-md shadow-sm">
//         <label htmlFor="username">
//           <input
//             {...register('username')}
//             type="text"
//             placeholder="Username"
//             autoComplete="email"
//             required
//             className="w-96 rounded-t-md border border-gray-800 indent-2 text-black focus:bg-zinc-600 focus:outline-none"
//           ></input>
//         </label>
//         <label htmlFor="password">
//           <input
//             {...register('password')}
//             type="password"
//             placeholder="Password"
//             autoComplete="current-password"
//             required
//             className="w-96 rounded-b-md border border-gray-800 indent-2 text-black focus:bg-zinc-600 focus:outline-none"
//           ></input>
//         </label>
//       </div>
//       <div className="flex flex-row gap-12 text-sm">
//         <label className="flex gap-2">
//           <input {...register('rememberMe')} type="checkbox"></input>
//           Remember me
//         </label>
//         <Link href="#" className="text-sky-800">
//           Forgot password?
//         </Link>
//       </div>
//       <button
//         type="submit"
//         className="flex h-8 w-5/6 flex-row items-center justify-center gap-2 rounded-lg bg-zinc-400 text-black hover:bg-sky-800 hover:shadow-2xl hover:shadow-black hover:duration-1000"
//       >
//         <LockIcon></LockIcon>
//         Sign in
//       </button>
//     </form>
//   )
// }

// export default LoginForm
