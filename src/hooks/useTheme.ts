import { useEffect } from 'react';
import { useThemeStore } from '../store';

export function useTheme() {
  const { setTheme, theme } = useThemeStore();

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      htmlElement?.classList.add('dark');
      setTheme('dark');
    } else {
      htmlElement?.classList.remove('dark');
      setTheme('light');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleThemeSwitch() {
    const htmlElement = document.querySelector('html');
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      htmlElement?.classList.add('dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
      htmlElement?.classList.remove('dark');
    }
  }

  return { handleThemeSwitch, theme };
}
