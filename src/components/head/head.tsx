import { PropsHead } from '@/types/components';
import Head from 'next/head';

export const HeadComponent = ({ title, description }: PropsHead) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
