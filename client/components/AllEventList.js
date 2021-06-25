import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/EventItem.module.css'

const AllEventList = ({ event }) => {
    return (
        <div className={styles.event}>
            <div className={styles.img}>
                <img
                    src={event.image.name}
                    width={170}
                    height={100}
                />
            </div>

            <div className={styles.info}>
                <span>
                    {new Date(event.date).toLocaleDateString('en-US')} at {event.time}
                </span>
                <h3>{event.name}</h3>
            </div>

            <div className={styles.link}>
                <Link href={`/events/${event.slug}`}>
                    <a className='btn'>Details</a>
                </Link>
            </div>
        </div>
    )
}

export default AllEventList
