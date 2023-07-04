import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'
import { AboutMusic } from '@/components/About'

const montserrat = Montserrat({ variable: '--montserrat', subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Onebitmusic</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/logoIcon.svg" />
      </Head>
      <Header />
      <main className={`${montserrat.variable} ${montserrat.className}`}>
        <Hero id="home" />
        <AboutMusic />
      </main>
      <Footer />
    </>
  )
}
