'use client';

import React from 'react';
import Image from 'next/image';
import Clock from '@/assets/svg/clock.svg';
import { formatDate } from '@/lib/formatDate';

interface DateProps {
  date: string;
}

export default function PublishedDate({ date }: DateProps) {
  return (
    <span className="my-3 flex items-center gap-2 text-base">
      <Image src={Clock} alt="Clock" width={16} height={16} priority />
      {formatDate(date)}
    </span>
  );
}
