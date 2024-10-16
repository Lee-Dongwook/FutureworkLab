'use client';

import React from 'react';
import type { Category } from '@/types/Category';

interface CategoryProps {
  category?: Category;
}

export default function Category({ category }: CategoryProps) {
  if (!category) {
    return null;
  }

  return (
    <span className="whitespace-nowrap rounded bg-gray-200 px-3 py-1 text-base">
      {category.name}
    </span>
  );
}
