import Link from 'next/link'
import React from 'react'

export const HomeNavbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" href="/">USPACE</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/login">Login</Link></li>
                    <li><a>Register</a></li>
                </ul>
            </div>
        </div>
    )
}
