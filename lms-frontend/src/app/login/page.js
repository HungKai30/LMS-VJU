'use client'
import { HomeNavbar } from '@/components/HomeNavbar'
import React from 'react'
import { Key, Mail } from 'lucide-react'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
export default function LoginPage() {
    const [showPassword, setShowPassword] = React.useState(false)
    return (
        <>
            <div className="bg-base-100">
                <HomeNavbar />
            </div>
            <section className="flex h-screen">
                <div className="w-1/2 bg-base-100 p-8 flex flex-col justify-center items-center">
                    <div className='w-full mx-auto p-8'>
                        <h1 className="text-4xl font-bold text-center text-base-content py-5 my-5" style={{ fontFamily: 'Instrument Sans' }}>Login</h1>
                        <form className='justify-center flex flex-col items-center'>
                            <label className="input w-full mb-4">
                                <Mail className="h-[1em] opacity-50" />
                                <input className='px-3 py-2 my-2 w-full text-base-content' type="input" required placeholder="Email" />
                            </label>
                            <label className="input w-full mb-4">
                                <Key className="h-[1em] opacity-50" />
                                <input className='w-full text-base-content ' type={showPassword ? "text" : "password"} required placeholder="Password" />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                    {showPassword ? <EyeOff className="h-[1em] opacity-50" /> : <Eye className="h-[1em] opacity-50" />}
                                </button>
                            </label>
                            <div className='w-full flex justify-between items-center'>
                                <Link href="/register" className="link link-primary text-base-content  text-center my-3">I do not have an account.</Link>
                                <Link href="/todo1" className="link link-primary text-base-content  text-center my-3">Forgot password?</Link>
                            </div>
                            <div className="w-full flex justify-end">
                                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-base-300 text-base-content  my-8 py-5" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-1/2 p-4" style={{ backgroundImage: "url('gallery1.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
            </section>
        </>
    )
}
