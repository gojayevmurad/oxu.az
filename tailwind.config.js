/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    fontFamily:{
      'oxu': ['pf_din_text_cond_promedium', 'sans-serif']
    },
    screens: {
      sm: '640px',
      md: '940px'
    }
  },
  plugins: []
}
