import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next App + FLEEK on IPFS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        Next App + FLEEK on IPFS
        </h1>
        <Link href={`/about`}><a>About</a></Link>
      </main>
    </div>
  )
}
