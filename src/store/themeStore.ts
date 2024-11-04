import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IThemeState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useThemeStore = create<IThemeState>()(
  devtools(
    (set) => ({
      theme: 'light',
      setTheme: (theme) =>
        set(() => ({ theme }), undefined, 'ThemeStore/setTheme'),
    }),
    { name: 'ThemeStore' }
  )
);
