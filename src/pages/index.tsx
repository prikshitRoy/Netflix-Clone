import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Header from 'components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='relative h-[140vh]'>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/* START */}

      <Header></Header>

{/* END */}
    </div>
  )
}
