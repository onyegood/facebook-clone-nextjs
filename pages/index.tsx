import type { NextPage } from 'next';
import { getSession, GetSessionParams, useSession } from 'next-auth/react';
import BodyComponent from '../components/body';
import HeadComponent from '../components/head';
import HeaderComponent from '../components/header';
import LoginComponent from '../components/login';

const Home: NextPage<{}> = () => {
  const { status } = useSession();
  const pageContent = () => {
    switch (status) {
      case 'loading':
        return <p>loading...</p>;
      case 'unauthenticated':
        return <LoginComponent />;
      case 'authenticated':
        return (
          <div className='h-screen bg-gray-100 overflow-hidden'>
            <HeadComponent title="Facebook" />
            <HeaderComponent />
            <BodyComponent />
          </div>
        );
      default:
        return <LoginComponent />;
    }
  };

  return pageContent();
};

export default Home;

export const getServerSideProps = async (
  context: GetSessionParams | undefined
) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
