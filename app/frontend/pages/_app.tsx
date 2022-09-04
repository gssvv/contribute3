import '../styles/globals.sass';
import type { AppProps } from 'next/app';
import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import Link from 'next/link';
import Discord from '../assets/icons/discord.svg';
import Twitter from '../assets/icons/twitter.svg';
import Telegram from '../assets/icons/telegram.svg';
import Menu from '../assets/icons/menu.svg';

function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileNavigation = useRef(null);

  const links = {
    telegram: 'https://contribute3.t.me/',
    twitter: 'https://twitter.com/Contribute3HQ',
    discord: 'https://discord.gg/hCqtJHKQvu',
  };

  useClickAway(mobileNavigation, () => {
    setIsMenuOpen(false);
  });

  return (
    <>
      <header className="container mx-auto px-4 py-6 flex items-center gap-4 sm:gap-12">
        <a href="/" className="font-mono text-primary font-bold text-xl">
          <img src="./logo.svg" className="h-10" alt="contribute3 logo" />
        </a>

        <div className="flex-1" />

        <nav className="hidden md:flex gap-8">
          <Link href="/"><a className="text-white active:opacity-50">Home</a></Link>
          <Link href="/projects/"><a className="text-white active:opacity-50">Explore projects</a></Link>
          {/* <a className="text-white active:text-primary" href="#">Blog</a> */}
        </nav>

        <div className="hidden md:flex gap-4">
          <a href={links.twitter} target="_blank"
            className="text-white hover:text-emerald-400" rel="noreferrer"><Twitter className="h-6 w-6" alt="" /></a>
          <a href={links.discord} target="_blank"
            className="text-white hover:text-emerald-400" rel="noreferrer"><Discord className="h-6 w-6" alt="" /></a>
          <a href={links.telegram} target="_blank"
            className="text-white hover:text-emerald-400" rel="noreferrer"><Telegram className="h-6 w-6" alt="" /></a>
        </div>

        <div ref={mobileNavigation} className="md:hidden relative">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="p-0">
            <Menu />
          </button>
          <ul className={`${!isMenuOpen && 'hidden'} absolute z-10 divide-y divide-zinc-700 right-0 w-52 rounded-lg bg-zinc-800 text-left font-normal`}>
            <div>
              <li className="text-xs opacity-50 pt-4 pb-2 px-4">Navigation</li>
              <li><a className="text-white active:opacity-50 py-2 px-4 block" href="/">Home</a></li>
              <li><a className="text-white active:opacity-50 py-2 px-4 block" href="/projects/">Projects</a></li>
            </div>
            <div>
              <li className="text-xs opacity-50 pt-4 pb-2 px-4">Join us</li>
              <li><Link href={links.twitter}><a className="text-white active:opacity-50 py-2 px-4 block" target="_blank" rel="noreferrer">Twitter</a></Link></li>
              <li><Link href={links.discord}><a className="text-white active:opacity-50 py-2 px-4 block" target="_blank" rel="noreferrer">Discord</a></Link></li>
              <li><Link href={links.telegram}><a className="text-white active:opacity-50 py-2 px-4 block" target="_blank" rel="noreferrer">Telegram</a></Link></li>
            </div>
          </ul>
        </div>
      </header>

      <Component {...pageProps} links={links} />

      <footer className="container mx-auto text-center text-xs my-8 font-mono">
          made by <a href="https://twitter.com/gssvv_" target="_blank" className="text-sky-500" rel="noreferrer">@gssvv_</a>
      </footer>
    </>
  );
}

export default MyApp;
