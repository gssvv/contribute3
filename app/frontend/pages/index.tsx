import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image';
import React from 'react';
import historyList from '../data/historyList.json';

import Discord from '../assets/icons/discord.svg';
import Twitter from '../assets/icons/twitter.svg';
import Telegram from '../assets/icons/telegram.svg';

export const getRandomElementFromArray = (arr: any[]) => {
  const randomIndex = Math.floor(arr.length * Math.random());
  return arr[randomIndex];
};

const Home: NextPage = ({ links }: any) => {
  const historyColors = ['#5B5B5B', '#86efac', '#4ade80', '#16a34a', '#166534'];

  const profiles = [
    {
      title: 'Non-contributor',
      status: 'open to work (updated 1 year ago)',
      repositories: 5,
      followers: '2',
      jobOffers: 0,
      avatar: './non-contributor.jpg',
    },
    {
      title: 'Contribute3 member',
      status: 'Senior Software Engineer at Metaverse',
      repositories: 125,
      followers: '12k',
      jobOffers: 64,
      highlightOffers: true,
      hasAchievements: true,
      highlyEffective: true,
      avatar: './contribute3-member.jpg',
    },
  ];

  const chatExamples = [
    {
      title: 'Contribute & collaborate',
      messages: [
        {
          avatar: '6.jpg',
          color: 'text-yellow-500',
          username: 'fake carrot',
          date: 'Today, 12:22',
          content: (<>Hi guys. Opened an issue for hardhat-boilerplate for that deploy bug.<br />
            <span className="text-primary">Can someone help me</span> with the testing part? https://github.com/N...</>),
        },
        {
          avatar: '1.jpg',
          color: 'text-emerald-500',
          username: 'Mumu',
          date: 'Today, 13:54',
          content: 'Working on that module too, I\'ll check it tonight',
          isReply: true,
        },
      ],
    },
    {
      title: 'Meet people & join events',
      messages: [
        {
          avatar: '2.jpg',
          color: 'text-pink-500',
          username: 'Krtek',
          date: 'Today, 01:02',
          content: (<>Hi! <span className="text-primary">Looking for a team</span> for Polygon BUIDL IT. Good at React
            (ts+redux) and JS in general 🤓</>),
        },
        {
          avatar: '3.jpg',
          color: 'text-indigo-500',
          username: 'Rust Magician',
          date: 'Today, 01:15',
          content: 'Yo! DM me, we were just looking for a frontend dev',
          isReply: true,
        },
      ],
    },
    {
      title: 'Grow skills & get help',
      messages: [
        {
          avatar: '4.jpg',
          color: 'text-yellow-500',
          username: 'Momento Morti',
          date: 'Today, 20:55',
          content: (<>
            I am currently making a TLS client with Rust (OpenSSL).
            Having troubles with brotli compression.<br /><span className="text-primary">Can anyone help?</span>
          </>),
        },
        {
          avatar: '5.jpg',
          color: 'text-red-400',
          username: 'redstone guy',
          date: 'Today, 21:01',
          content: (<>
            Made similar thing, here&apos;s the repo https://github...
          </>),
          isReply: true,
        },
      ],
    },
  ];

  return (
    <div>
      <Head>
        <title>Contribute3 — Web3 Open-source Lovers Community</title>
        <meta name="description" content="Community where developers collaborate on open-source web3 projects
to gain real-world experience, improve tech skills and build professional network." />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>

      <div className="container overflow-visible mx-auto px-4 my-16 sm:my-32 text-center relative">
        <img src="./blurry-gradient.png" className="blurry-gradient blurry-gradient--md -top-1/4 -left-1/4" alt="" />

        <div className="relative">
          <h1>Start working on web3 <br className="md:block hidden" />
        projects today.</h1>
          <p className="mt-6 opacity-70 sm:text-xl text-base leading-7 font-light">
          Community where developers collaborate on open-source web3 projects <br className="md:block hidden" />
          to gain real-world experience, improve tech skills and build professional network.
          </p>
          <div className="flex sm:gap-6 gap-4 mt-10 justify-center flex-wrap">
            <a href="https://discord.gg/hCqtJHKQvu" target="_blank" className="hover:no-underline" rel="noreferrer"><button className="bg-primary--darken">Join community</button></a>
            <a href="/projects/" className="hover:no-underline"><button><span className="text-primary">Explore projects</span></button></a>
          </div>
        </div>
      </div>

      <div className="container overflow-visible relative max-w-xl lg:max-w-6xl flex mx-auto px-4 gap-12 sm:gap-16 lg:gap-8 flex-col lg:flex-row">
        <img src="./blurry-gradient.png" className="blurry-gradient blurry-gradient--lg -right-20 sm:-right-48 -top-64" alt="" />

        {profiles.map((profile) => (
          <div key="" className={`lg:w-1/2 relative flex-wrap ${!profile.highlyEffective && 'opacity-50'}`}>
            <h3 className="font-bold">
              <span className={profile.highlyEffective ? 'text-primary' : ''}>
                {profile.title}
              </span>
            </h3>
            <div className="sm:mt-8 mt-4 flex gap-4 sm:gap-8">
              <div className="min-w-max">
                <img className="h-20 w-20 sm:h-32 sm:w-32 bg-white rounded-xl object-cover" src={profile.avatar} alt="" />

                {profile.hasAchievements && (
                  <div className="mt-4 hidden sm:flex">
                    <img
                      src="./github-achievements/0.png"
                      alt=""
                      className="w-12 h-12"
                    />
                    <img
                      src="./github-achievements/1.png"
                      alt=""
                      className="w-12 h-12 -ml-5"
                    />
                    <img
                      src="./github-achievements/2.png"
                      alt=""
                      className="w-12 h-12 -ml-5"
                    />
                    <img
                      src="./github-achievements/3.png"
                      alt=""
                      className="w-12 h-12 -ml-6"
                    />
                  </div>
                )}
              </div>

              <div className="text-sm sm:text-base">
                <p className="mt-1 mb-3"><b>Status:</b> {profile.status}</p>

                <div className="w-full max-w-xs flex flex-wrap gap-1 opacity-70">
                  {historyList.map((colorIndex) => (
                    <div key="" className="history-dot" style={{
                      background: profile.highlyEffective ? historyColors[colorIndex]
                        : historyColors[Math.max(colorIndex - 3, 0)],
                    }}></div>
                  ))}
                </div>

                <p className="mt-5"><b>{profile.repositories}</b> repositories · <b>{profile.followers}</b> followers</p>
                <p className={'mt-2 '}>
                  <span className={`${profile.jobOffers > 0 ? 'text-primary' : ''}`}><b>{profile.jobOffers}</b> job offers</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* What we do */}

      <div className="blue-block relative my-16 sm:my-32">

        <div className="mx-auto max-w-2xl xl:container px-4 py-16 sm:py-32">

          <h2>What we do in <span className="text-primary">contribute3  </span></h2>

          <div className="flex flex-wrap xl:flex-nowrap gap-12 mt-10 align-top">
            {
              chatExamples.map((example) => (
                <div key="" className="xl:w-1/3">
                  {/* <h4><span className="text-primary">Contribute</span> & collaborate</h4> */}
                  <h4 className="opacity-75">{example.title}</h4>

                  {example.messages.map((message) => (
                    <div key="" className={`mt-6 bg-discord p-4 flex gap-4 rounded-xl ${message.isReply && 'ml-10 sm:ml-20'}`}>
                      <img
                        className="w-12 h-12 bg-white rounded-full"
                        style={{ minWidth: '3rem' }}
                        src={`./avatars/${message.avatar}`}
                        alt=""
                      />

                      <div>
                        <div>
                          <span className={`font-bold ${message.color}`}>{message.username}</span>
                          <span className="ml-2 opacity-50 text-sm">{message.date}</span>
                        </div>
                        <p className="mt-1" style={{ wordBreak: 'break-word' }}>{message.content}</p>
                      </div>
                    </div>
                  ))}

                  {/* <div className="ml-10 sm:ml-20 mt-6 bg-discord p-4 flex gap-4 rounded-xl">
                    <img
                      className="w-12 h-12 bg-white rounded-full"
                      style={{ minWidth: '3rem' }}
                      src="./avatars/2.jpg"
                    />

                    <div>
                      <div>
                        <span className="font-bold text-yellow-400">Alex</span>
                        <span className="ml-2 opacity-50 text-sm">Today, 12:22</span>
                      </div>
                      <p className="mt-1">
  Hi guys. Opened an issue for hardhat-boilerplate for that deploy.
                      </p>
                    </div>
                  </div> */}
                </div>
              ))
            }
          </div>

        </div>
      </div>

      <div className="container mx-auto px-4 my-16 sm:my-32 relative">
        <img src="./blurry-gradient.png" className="blurry-gradient blurry-gradient--lg -top-1/4 left-1/4" alt="" />

        <div className="relative">
          <h2>Not a <span className="text-primary">contributor</span> yet?</h2>
          <h4 className="opacity-50 mt-3 mb-10 sm:mb-20">Here&apos;s why you should become one</h4>

          <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-12 mt-8 sm:mt-16">
            <h3 className="md:w-1/2 text-right md:-mt-0.5">Why contribute:</h3>
            <ul className="md:w-1/2 leading-10 pl-4 md:pl-0 tick-list">
              <li>Build your job resume</li>
              <li>Grow your professional network</li>
              <li>Enhance your tech skills</li>
              <li>Find mentors and teach others</li>
            </ul>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-12 mt-8 sm:mt-16">
            <h3 className="md:w-1/2 text-right md:-mt-0.5">How <span className="text-primary">contribute3</span> helps:</h3>
            <ul className="md:w-1/2 leading-10 pl-4 md:pl-0 tick-list">
              <li>Find better projects</li>
              <li>Connect with people faster</li>
              <li>Find teams to collaborate on massive issues</li>
              <li>Get help and share experiences</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-primary-gradient hidden">
        <div className="container mx-auto px-4 py-20 flex items-center gap-8">
          <div className="w-2/3">
            <h2 className="text-5xl">Looking for a <span className="text-primary">web3 project</span> to contribute?</h2>
            <h4 className="mt-6">We made an list of cool
        web3 projects <br/> ranked by activity and tech stack</h4>

            <a href="#" className="mt-10 block">Check it out</a>
          </div>

          <img src="" alt="" className="bg-white w-96 h-72" />
        </div>
      </div>

      <div className="blue-block mt-16 sm:mt-32">
        <div className="container mx-auto px-4 py-16 sm:py-32">
          <h1 className="text-center">Are you with us?</h1>
          <p className="mt-3 text-center opacity-50 text-md sm:text-lg">Membership is free. As all best things in life.</p>

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
        </div>
      </div>

    </div>
  );
};

export default Home;
