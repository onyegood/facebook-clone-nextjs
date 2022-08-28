import type { NextPage } from 'next'
import HeadComponent from '../components/head'
import HeaderComponent from '../components/header'

const Home: NextPage = () => {
  return (
    <div>
      <HeadComponent title='Facebook'/>
      <HeaderComponent />
    </div>
  )
}

export default Home
