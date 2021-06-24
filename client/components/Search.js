import { useState } from 'react'
import styles from '@/styles/Search.module.css'

export default function Search() {

    const [term, setTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.search}>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder='Search Events'
                />
            </form>
        </div>
    )
}