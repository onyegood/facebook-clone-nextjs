import Head from 'next/head';
import React from 'react';

interface IProps {
  description?: string
  title?: string
}
const HeadComponent: React.FC<IProps> = ({ description, title }) => {
  return (
    <Head>
      <title>Facebook {title ? `| ${title}` : ''}</title>
      <meta name="description" content={`${description ? description : 'Social Media App'}`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
