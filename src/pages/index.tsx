import Head from 'next/head'
import styles from '../styles/Home.module.css'

type Props = {
  title: string
}

export default function Home({ title = 'Hello World' }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Won Games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
      </main>
    </div>
  )
}
