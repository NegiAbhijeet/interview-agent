'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // set true if you want animation only once
    });
  }, []);

  return null; // no UI needed, it just triggers AOS setup
}
