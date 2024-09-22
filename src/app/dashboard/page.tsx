import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'

export default function Dashboard() {
    const { userId } = auth()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Welcome, user {userId}!</p>
            <div className="mt-4">
                <Link
                    href="/newsletters"
                    className="text-blue-500 hover:underline"
                >
                    Manage Newsletters
                </Link>
            </div>
            <div className="mt-2">
                <Link
                    href="/subscribers"
                    className="text-blue-500 hover:underline"
                >
                    Manage Subscribers
                </Link>
            </div>
        </div>
    )
}
