import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

const Delete: NextPage = () => {
  const title = 'Todo App Delete'
  const description = 'ToDoを削除'

  const router = useRouter()
  const { id } = router.query

  const handleOK = () => {
    fetch(`/api/${id}`, { method: 'DELETE' })
      .then((res) => {
        router.push('/')
      })
      .catch((res) => {
        alert(res)
        router.push('/')
      })
  }

  const handleCancel = () => {
    router.push('/')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>{description}</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <p>{id}を削除しますか？</p>
            <button onClick={handleOK}>OK</button>
            <Link href="/">
              <button onClick={handleCancel}>Cancel</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Delete
