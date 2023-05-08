import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/NavBar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Отчитане на активност Semkov2001</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar></NavBar>
        <Header title="Welcome to my app pavel111111111111111111111111111!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
