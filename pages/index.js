import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { sql, connect } from './database.js'

async function getData() {
  await connect()
  try {
    const result = await sql.query`SELECT * FROM WORKERS`
    console.log('Result:', result)
  } catch (error) {
    console.log('Error:', error.message)
  }
}

getData()
//Data Source=mssql-90045-0.cloudclusters.net,17553; Initial Catalog=SemkovLtd;User ID=pavel;Password=6PINIer724++";

export default function Home() {
  return (
    
    <div className="container">
      <Head>
        <title>Отчитане на активност Semkov2001</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app pavel111111111111111111111111111!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
