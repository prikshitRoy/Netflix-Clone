import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Header from 'components/Header'
import Banner from 'components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        
      <Header/>
      <main>
        <Banner/>
          <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>

      </main>
          {/* Modal */}
    </div>
  )
}
