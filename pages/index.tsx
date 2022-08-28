import type { NextPage } from 'next';
import { getSession, GetSessionParams, useSession } from 'next-auth/react';
import HeadComponent from '../components/head';
import HeaderComponent from '../components/header';
import LoginComponent from '../components/login';
import SidebarComponent from '../components/sidebar';

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
          <div>
            <HeadComponent title="Facebook" />
            <HeaderComponent />
            <SidebarComponent />
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
