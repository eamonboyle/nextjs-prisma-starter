import Link from 'next/link'
import { Brain, LayoutDashboard, BarChart } from 'lucide-react'
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold">
                        Newsletter SaaS
                    </Link>
                    <nav className="flex items-center space-x-4">
                        <SignedIn>
                            <Link
                                href="/dashboard"
                                className="hover:text-gray-300"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="/newsletters"
                                className="hover:text-gray-300"
                            >
                                Newsletters
                            </Link>
                            <Link
                                href="/subscribers"
                                className="hover:text-gray-300"
                            >
                                Subscribers
                            </Link>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                                    Sign In
                                </button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </SignedOut>
                    </nav>
                </div>
            </header>

            {/* Main content */}
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        Welcome to Newsletter SaaS
                    </h1>
                    <p className="text-xl text-gray-600">
                        Create, manage, and send newsletters with ease
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        title="AI-Powered Content"
                        description="Use our AI to help generate and refine your newsletter content."
                        Icon={Brain}
                    />
                    <FeatureCard
                        title="Easy Management"
                        description="Manage your subscribers and newsletters all in one place."
                        Icon={LayoutDashboard}
                    />
                    <FeatureCard
                        title="Powerful Analytics"
                        description="Track the performance of your newsletters with detailed analytics."
                        Icon={BarChart}
                    />
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/dashboard"
                        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Get Started
                    </Link>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-100 text-gray-600 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h2 className="text-lg font-semibold mb-4">
                                Newsletter SaaS
                            </h2>
                            <p>
                                Empowering your email marketing with AI-assisted
                                newsletters.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h3 className="text-lg font-semibold mb-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/dashboard"
                                        className="hover:text-gray-900"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/newsletters"
                                        className="hover:text-gray-900"
                                    >
                                        Newsletters
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/subscribers"
                                        className="hover:text-gray-900"
                                    >
                                        Subscribers
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3">
                            <h3 className="text-lg font-semibold mb-4">
                                Contact Us
                            </h3>
                            <p>Email: support@newslettersaas.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p>&copy; 2024 Newsletter SaaS. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function FeatureCard({ title, description, Icon }) {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-4">
                <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-300">
                {title}
            </h3>
            <p className="text-gray-300">{description}</p>
        </div>
    )
}
