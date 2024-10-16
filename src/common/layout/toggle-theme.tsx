import { useTheme } from 'next-themes';
import React from 'react';
import { Moon, Sun } from 'lucide-react';

import { Button } from '@/common/ui/button';

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="w-full justify-start"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      size="sm"
      variant="ghost"
    >
      <div className="flex gap-2 dark:hidden">
        <Moon className="size-5" />
        <span className="block lg:hidden">Dark Mode</span>
      </div>

      <div className="hidden gap-2 dark:flex">
        <Sun className="size-5" />
        <span className="block lg:hidden">Light Mode</span>
      </div>
    </Button>
  );
};
