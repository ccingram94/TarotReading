import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarot Card Reading</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="overlay">
      </div>
      <motion.main 
      className={styles.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2}}
      >
        <div id="title">
          <h1>Tarot Readings</h1>
          <h2>please select a reading below:</h2>
          <hr></hr>
          <div id="selections">
            <h2>3 Card Reading</h2>
            <h2>5 Card Reading</h2>
          </div>
        </div>
      </motion.main>
    </div>
  )
}
