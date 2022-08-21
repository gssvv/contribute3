import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.sass';

const Home: NextPage = () => (

  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <p className="text-3xl font-bold underline">hello</p>

    <footer
      className={styles.main__test}
    >
  asd
    </footer>
  </div>
);

export default Home;
