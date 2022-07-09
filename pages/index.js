import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SimpleCard from '../components/signup'
import WithSubnavigation from '../components/navbar'
import LargeWithLogoLeft from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <WithSubnavigation />
      <SimpleCard />
      <LargeWithLogoLeft />
    </div>
  )
}
