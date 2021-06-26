import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from "axios"
import { API_URL } from '@/config/index'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import styles from '@/styles/Event.module.css'

const EventItem = ({ event }) => {

    const router = useRouter()

    const deleteEvent = async (e) => {
        e.preventDefault()
        if (confirm('Are you sure?')) {
            const res = await axios.delete(`${API_URL}/events/${event.id}`)
            if (!res.statusText === 'OK') {
                if (res.status === 403 || res.status === 401) {
                    toast.error('No token included')
                    return
                }
                toast.error(res.data.message)
            } else {
                router.push('/events')
            }
        }
    }

    return (
        <div className={styles.event}>
            <div className={styles.controls}>
                <Link href={`/events/edit/${event.id}`}>
                    <a>
                        <FaPencilAlt /> Edit Event
                    </a>
                </Link>
                <a href="#" className={styles.delete} onClick={deleteEvent}>
                    <FaTimes /> Delete Event
                </a>
            </div>
            <span>
                {new Date(event.date).toLocaleDateString('en-US')} at {event.time}
            </span>
            <h1>{event.name}</h1>
            <ToastContainer />
            <div className={styles.image}>
                {
                    event.image ? (<img
                        src={event.image.name}
                        width={960}
                        height={600} />
                    ) : (
                        <img
                            alt="cover image"
                            src='images/default-event.png'
                            width={960}
                            height={600}
                        />
                    )
                }
            </div>
            <h3>Performers:</h3>
            <p>{event.performers}</p>
            <h3>Description:</h3>
            <p>{event.description}</p>
            <h3>Venue: {event.venue}</h3>
            <p>{event.address}</p>

            <Link href='/events'>
                <a className={styles.back} type="button">{'<'} Go Back</a>
            </Link>
        </div>
    )
}

export default EventItem
