'use client';

import React from 'react';
import Link from 'next/link';
import { NEWS_LIST_LIMIT } from '@/constants';

interface PaginationProps {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
}

export default function Pagination({ totalCount, current = 1, basePath = '', q }: PaginationProps) {
  const pages = Array.from({ length: Math.ceil(totalCount / NEWS_LIST_LIMIT) }).map(
    (_, i) => i + 1,
  );

  return (
    <div className="mt-6 flex items-center justify-center py-6">
      <ul className="flex">
        {pages.map((p) => (
          <li key={p} className="mx-1">
            {current !== p ? (
              <Link
                className="flex h-9 w-9 items-center justify-center rounded border-gray-300 hover:bg-gray-100"
                href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')}
              >
                {p}
              </Link>
            ) : (
              <span className="flex h-9 w-9 items-center justify-center rounded bg-blue-500 text-white">
                {p}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
