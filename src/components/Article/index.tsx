'use client';
import React from 'react';
import Image from 'next/image';
import Category from '@/components/Category';
import PublishedDate from '@/components/Date';
import type { Article } from '@/types/Article';
import { formatRichText } from '@/lib/formatRichText';

interface ArticleProps {
  data: Article;
}

export default function Article({ data }: ArticleProps) {
  return (
    <main className="container mx-auto px-4">
      <h1 className="mb-6 text-left text-4xl sm:mb-5 sm:text-2xl">{data.title}</h1>
      <p className="my-6 text-left text-sm text-gray-500 sm:my-10">{data.description}</p>
      <div className="mb-16 flex flex-shrink items-center justify-start gap-6 sm:mb-10 sm:text-sm">
        <Category category={data.category} />
        <PublishedDate date={data.publishedAt || data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          className="mb-16 h-auto w-full sm:mb-10"
          src={data.thumbnail?.url}
          alt="Thumbnail"
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
        />
      )}
      <div
        className="prose prose-lg my-8"
        dangerouslySetInnerHTML={{ __html: `${formatRichText(data.content)}` }}
      />
    </main>
  );
}
