import Head from 'next/head'
import styles from '../styles/about.module.css'

export default function About() {
    return (<>
        <div className={styles.container}>
            <Head>
                <title>Next About</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    About Page
                </h1>
                <button className='btn btn-primary'>Click Here</button>
            </main>
        </div>
    </>)
}