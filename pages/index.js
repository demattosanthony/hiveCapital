import Head from 'next/head'
import styled from '@emotion/styled'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Hive Capital</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="theme-color"
          content="#222222"
          media="(prefers-color-scheme: dark)"
        />
      </Head>

      <Header />
      <Body />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to top, black, #222222);
`
