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
        'primary': '#3e84a8',
        'highlight-primary': '#5ba4d8',
        'highlight-secondary': '#2d6a8e',
        'error-primary': '#e74c3c',
        'error-secondary': '#c0392b',
        'success-primary': '#27ae60',
        'success-secondary': '#2ecc71',
        'background-light': '#f0f4f7',
        'background-dark': '#e6eff3',
      },
    },
  },
  plugins: [],
}
export default config
