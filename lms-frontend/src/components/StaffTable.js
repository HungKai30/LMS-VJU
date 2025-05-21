import React from 'react'

const StaffTable = () => {
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 p-2 m-4">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Last Login</th>
                        <th>Date Joined </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Goofy</td>
                        <td>Ahh</td>
                        <td>goofyahh</td>
                        <td>goofyahh@gmail.com</td>
                        <td>Your mother</td>
                        <td>None</td>
                        <td>06/01/2025</td>
                        <td>
                            <button className='btn btn-primary bg-lime-300 text-accent-content mx-2'>Edit</button>
                            <button className='btn btn-primary bg-accent text-accent-content mx-2'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default StaffTable