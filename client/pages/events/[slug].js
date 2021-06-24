import { useRouter } from 'next/router'

export default function Event() {

    const router = useRouter()

    return (
        <div>
            <h1>My Event</h1>
            <h2>{router.query.slug}</h2>
            <button onClick={() => router.push('/')}>Click</button>
        </div>
    )
}
