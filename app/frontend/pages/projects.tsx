import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';

import Discord from '../assets/icons/discord.svg';
import Twitter from '../assets/icons/twitter.svg';
import Telegram from '../assets/icons/telegram.svg';

const Projects: NextPage = ({ links }: any) => (
  <div>
    <Head>
      <title>Open-source Web3 Projects — Contribute3</title>
      <meta name="description" content="Community where developers collaborate on open-source web3 projects
to gain real-world experience, improve tech skills and build professional network." />
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <meta data-hid="og:image:url" property="og:image:url" content="https://contribute3.com/og-image.png" />
    </Head>

    <div className="container overflow-visible mx-auto px-4 my-16 sm:my-32 text-center relative">
      <img src="./blurry-gradient.png" className="blurry-gradient blurry-gradient--md -top-1/4 -left-1/4" alt="" />
      <img src="./blurry-gradient.png" className="blurry-gradient blurry-gradient--lg -right-20 sm:-right-48 top-0" alt="" />

      <div className="relative">
        <h1>Open-source web3 <br className="md:block hidden" /> projects to contribute</h1>
        <p className="mt-6 opacity-70 sm:text-xl text-base leading-7 font-light">
          Hand-picked open-source web3 projects to gain real-world experience,<br className="md:block hidden" />
          imporve tech skills and build professional network.
        </p>
        <div className="flex sm:gap-6 gap-4 mt-10 justify-center flex-wrap">
          <a href="https://discord.gg/hCqtJHKQvu" target="_blank" className="hover:no-underline" rel="noreferrer"><button className="bg-primary--darken">Join community</button></a>
        </div>
      </div>
    </div>

    <div className="blue-block mt-16 sm:mt-32 relative">
      <div className="container mx-auto px-4 py-16 sm:py-32">
        <h1 className="text-center">Stop here 🚧</h1>
        <p className="mt-3 text-center opacity-50 text-md sm:text-lg">
        This feature is still in progress. Follow us and get notified when this page is available.
        </p>

        <div className="flex flex-wrap gap-4 mt-8 sm:mt-16 justify-center">
          <a target="_blank" href={links.twitter} className="block text-center hover:no-underline" rel="noreferrer">
            <button className="text-sky-500">
              <Twitter height={20} />
            Twitter
            </button>
          </a>

          <a target="_blank" href={links.discord} className="block text-center hover:no-underline" rel="noreferrer">
            <button className="text-indigo-400">
              <Discord height={20} />
            Discord
            </button>
          </a>

          <a target="_blank" href={links.telegram} className="block text-center hover:no-underline" rel="noreferrer">
            <button className="text-sky-400">
              <Telegram height={20} />
            Telegram
            </button>
          </a>
        </div>

        <p className="mt-32 mb-4 text-center opacity-50 text-md sm:text-lg">
          P.S. Here is how it will look like:
        </p>

        <img className="rounded-3xl" src="/projects-preview.png" alt="projects preview" />
      </div>
    </div>
  </div>
);

export default Projects;
