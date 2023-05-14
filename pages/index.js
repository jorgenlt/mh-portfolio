import Head from 'next/head';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Section1 from '@/sections/Section1';
import Section2 from '@/sections/Section2';
import Section3 from '@/sections/Section3';
import Section4 from '@/sections/Section4';
import Section5 from '@/sections/Section5';
import Section6 from '@/sections/Section6';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, 
  []);

  return (
    <>
      <Head>
        <title>Matthew Harrison</title>
        <meta name="description" content="Matthew Harrison" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>
    </>
  )
}
