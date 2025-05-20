import React from 'react'

export const HomeCardIntro = () => {
    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-5xl font-bold">Empower Learning</h1>
                    <h1 className="text-5xl font-bold">with Innovation and</h1>
                    <h1 className="text-5xl font-bold">Simplicity</h1>
                    <p className="py-6">
                        <p className="py-6">
                            <span className="text-2xl font-bold">What is USPACE</span>
                            <br />
                            USPACE is a platform that connects students and teachers, providing a space for learning and collaboration. It offers a variety of features to enhance the learning experience, including online courses, study materials, and interactive tools.
                        </p>
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}
