import type { NextPage } from 'next'
import Head from 'next/head'
import HeadComponent from '../components/head'
import HeaderComponent from '../components/header'

const Home: NextPage = () => {
  return (
    <div>
      <HeadComponent />
      <HeaderComponent />
    </div>
  )
}

export default Home
