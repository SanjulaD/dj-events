import { useEffect, useState } from "react"
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import { useRouter } from 'next/router'
import EventItem from "@/components/EventItem"

export default function Event() {

    const router = useRouter()

    const [event, setEvent] = useState({})

    useEffect(() => {
        if (event) {
            fetchEvents()
        }
    }, [router])

    const fetchEvents = async () => {
        await axios.get(`${API_URL}/events?slug=${router.query.slug}`)
            .then((result) => {
                const data = result.data[0]
                setEvent(data)
            }

            )
            .catch(error => console.error("error", error));
    }
    return (
        <Layout>
            {
                event && <EventItem event={event} />
            }

        </Layout>
    )
}
