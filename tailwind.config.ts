import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-barlow-condensed)', 'Barlow Condensed', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
      },
      colors: {
        background: '#0D0D0D',
        surface: '#1A1A1A',
        accent: '#3DDC97',
        'primary-text': '#F5F5F5',
        'muted-text': '#888888',
        'subtle-border': '#2A2A2A',
      },
    },
  },
  plugins: [],
}

export default config
