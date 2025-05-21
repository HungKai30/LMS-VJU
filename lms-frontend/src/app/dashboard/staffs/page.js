import React from 'react'
import { DashboardNavbar } from '@/components/DashboardNavbar'
import Link from 'next/link'
import { Book, Calendar, Clipboard, Cog, CogIcon, Component, GraduationCapIcon, Home } from 'lucide-react'
import StaffTable from '@/components/StaffTable'
export default function StaffDashboard() {
    return (
        <div className="min-h-screen flex flex-col bg-base-100">
            <div className="w-full">
                <DashboardNavbar />
            </div>
            <div className="flex flex-1">
                <div className="bg-base-200 shadow-lg w-max">
                    <div>
                        <ul className="menu menu-vertical space-y-2 w-max">
                            <li>
                                <Link className="flex items-center p-3 hover:bg-primary hover:text-white rounded-lg" href="/dashboard">
                                    <Home className="mr-3" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center p-3 hover:bg-primary hover:text-white rounded-lg" href="/dashboard/staffs">
                                    <CogIcon className="mr-3" />
                                    Manage Staffs
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center p-3 hover:bg-primary hover:text-white rounded-lg" href="/dashboard/staffs/add">
                                    <Component className="mr-3" />
                                    Add Staffs
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center p-3 hover:bg-primary hover:text-white rounded-lg" href="/dashboard/students">
                                    <GraduationCapIcon className="mr-3" />
                                    Manage Students
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center p-3 hover:bg-primary hover:text-white rounded-lg" href="/dashboard/students/add">
                                    <Component className="mr-3" />
                                    Add Students
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center p-3 hover:bg-primary hover:text-white rounded-lg" href="/dashboard/courses">
                                    <CogIcon className="mr-3" />
                                    Manage Courses
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center p-3 hover:bg-primary hover:text-white rounded-lg" href="/dashboard/courses/add">
                                    <Component className="mr-3" />
                                    Add Courses
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center p-3 hover:bg-primary hover:text-white rounded-lg" href="/dashboard/subjects">
                                    <CogIcon className="mr-3" />
                                    Manage Subjects
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center p-3 hover:bg-primary hover:text-white rounded-lg" href="/dashboard/subjects/add">
                                    <Component className="mr-3" />
                                    Add Subjects
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center p-3 hover:bg-primary hover:text-white rounded-lg" href="/dashboard/sessions">
                                    <CogIcon className="mr-3" />
                                    Manage Sessions
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center p-3 hover:bg-primary hover:text-white rounded-lg" href="/dashboard/sessions/add">
                                    <Component className="mr-3" />
                                    Add Sessions
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center p-3 hover:bg-primary hover:text-white rounded-lg" href="/dashboard/attendance">
                                    <Clipboard className="mr-3" />
                                    View Attendance
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center p-3 hover:bg-primary hover:text-white rounded-lg" href="/dashboard/students/leave">
                                    <Component className="mr-3" />
                                    Student Leave
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center p-3 hover:bg-primary hover:text-white rounded-lg" href="/dashboard/staffs/leave">
                                    <Component className="mr-3" />
                                    Staff Leave
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-4/5 overflow-y-auto h-[calc(100vh-64px)]">
                    <h1 className="text-4xl font-bold p-6">Staff List</h1>
                    <StaffTable />
                </div>
            </div>
        </div>
    )
}