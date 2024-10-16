'use client';

import React from 'react';
import Image from 'next/image';
import BackgroundImage from '@/assets/img/img-mv.jpg';

interface HeroProps {
  title: string;
  sub: string;
}

export default function Hero({ title, sub }: HeroProps) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-black bg-opacity-50 py-24 text-white sm:py-16">
      <div className="z-10 text-center">
        <h1 className="mb-4 text-4xl font-bold sm:text-3xl">{title}</h1>
        <p className="mb-6 text-lg sm:text-base">{sub}</p>
      </div>
      <Image
        className="absolute left-0 top-0 z-[-1] h-full w-full object-cover"
        src={BackgroundImage}
        alt="Background Image"
        width={4000}
        height={1200}
        priority
      />
    </section>
  );
}
