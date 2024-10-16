'use client';

import React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/common/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/common/ui/dropdown-menu';

function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem onClick={() => setTheme('system')}>System Default Mode</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark Mode</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('light')}>Light Mode</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ModeToggle;