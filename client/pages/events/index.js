import { useEffect, useState } from "react"
import Layout from "@/components/Layout"
import axios from "axios"
import { API_URL } from '@/config/index'
import AllEventList from "@/components/AllEventList"

export default function EventsPage() {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async () => {
        await axios.get(`${API_URL}/events?_sort=date:ASC`)
            .then((result) => {
                const data = result.data
                setEvents(data)
            }

            )
            .catch(error => console.error("error", error));
    }

    return (
        <Layout title='All Events'>
            <h1>Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}
            {
                events.map((eventsList) => (
                    <AllEventList event={eventsList} key={eventsList.id} />
                ))
            }
        </Layout>
    )
}
