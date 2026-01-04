'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return {
    toggleTheme,
    isDark: resolvedTheme === 'dark',
    mounted,
    theme,
  };
}
