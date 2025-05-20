import React from 'react'

export const HomeNavbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">USPACE</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Login</a></li>
                    <li><a>Register</a></li>
                </ul>
            </div>
        </div>
    )
}
