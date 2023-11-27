import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '540px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
    },
    extend: {
      colors:{
          light: "#ffffff",
          title_color: '#4D582F',
          subtitle: "#434543",
          gray_dark: "#757575",
          color_bg: "#91938D",
          gray_light: "#EDEEED",
          path_color: "#B5E742",
      },
      fontFamily: {
        ephesis: ['Ephesis',' cursive'],
        great: ['Great Vibes','cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'bg-img-1': "url('/banner.jpg')",
        'feature-bg-1' : "url('/branch with leaves WHITE.png')",
        'bg-img-2' : "url('/bg.png')",
      },
    },
  },
  plugins: [],
}
export default config
