import { Book, BookA, Clapperboard, User, Users } from 'lucide-react'
import React from 'react'

export const DashboardHome = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body flex flex-row items-center">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <Users className="h-8 w-8 text-blue-500" />
                        </div>
                        <div className="ml-4">
                            <h2 className="card-title text-gray-500 text-sm">Total Students</h2>
                            <p className="text-2xl font-bold">1,234</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body flex flex-row items-center">
                        <div className="bg-green-100 p-3 rounded-full">
                            <User className="h-8 w-8 text-green-500" />
                        </div>
                        <div className="ml-4">
                            <h2 className="card-title text-gray-500 text-sm">Total Staff</h2>
                            <p className="text-2xl font-bold">248</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body flex flex-row items-center">
                        <div className="bg-yellow-100 p-3 rounded-full">
                            <Book className="h-8 w-8 text-yellow-500" />
                        </div>
                        <div className="ml-4">
                            <h2 className="card-title text-gray-500 text-sm">Total Courses</h2>
                            <p className="text-2xl font-bold">86</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body flex flex-row items-center">
                        <div className="bg-purple-100 p-3 rounded-full">
                            <BookA className="h-8 w-8 text-purple-500" />
                        </div>
                        <div className="ml-4">
                            <h2 className="card-title text-gray-500 text-sm">Total Subjects</h2>
                            <p className="text-2xl font-bold">142</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}