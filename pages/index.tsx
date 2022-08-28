import type { NextPage } from 'next'
import { getSession, GetSessionParams, useSession } from 'next-auth/react'
import HeadComponent from '../components/head'
import HeaderComponent from '../components/header'
import LoginComponent from '../components/login'

const Home: NextPage<{}> = () => {
  const { data: session } = useSession()
  if (!session) return <LoginComponent />

  return (
    <div>
      <HeadComponent title='Facebook'/>
      <HeaderComponent />
    </div>
  )
}

export default Home

export const getServerSideProps = async (context: GetSessionParams | undefined) => {
  const session = await getSession(context);
  return {
    props: {
      session
    },
  }
}
