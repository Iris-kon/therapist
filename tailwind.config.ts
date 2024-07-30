import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#60a5fa',
        'secondary-green': '#34d399',
        'highlight-purple': '#d8b4fe',
        'neutral-light-gray': '#f3f4f6',
        'text-dark-gray': '#1f2937',
        'error-red': '#fc8181',
        'success-green': '#9ae6b4',
        'alert-yellow': '#fef08a',
        'contact-whatsapp': '#25D366',
      },
    },
  },
  plugins: [],
}
export default config
