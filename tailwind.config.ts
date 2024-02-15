import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'moveInBottom' :{
          '0%':{
              opacity: '0',
              transform: 'translateY(30px)',
          }, 
          '100%':{
              opacity: '1',
              transform: 'translateY(0px)'
          }
        },
        'girar' : {
          '0%' : {
            transform: 'rotate(0deg)'
          },
          '20%':{
            transform: 'rotate(0)',
          },
          '40%':{
            transform: 'rotate(0)',
          },
          '50%':{
            transform: 'rotate(0)',
          },
          '100%' : {
            transform: 'rotate(-90deg)',
            marginRight: '3.5rem'
          },
        },
        'hover' : {
          '0%' : {
            opacity: '0'
          },
          '20%':{
            opacity: '0',
          },
          '40%':{
            opacity: '0',
          },
          '45%':{
            opacity: '0',
          },
          '100%' : {
            opacity: '1',
          },
        },
        'hoverBalao' : {
          '0%' : {
            opacity: '0'
          },
          '20%':{
            opacity: '0',
          },
          '40%':{
            opacity: '0',
          },
          '45%':{
            opacity: '0',
          },
          '100%' : {
            opacity: '1',
          },
        },
        'typing1': {
          from: {
            width: '0'
          }, to: {
            width: '21ch',
          } 
        },
        'typing2': {
          from: {
            width: '0'
          }, to: {
            width: '19ch',
          } 
        },

        'typing3': {
          from: {
            width: '0'
          }, to: {
            width: '21ch',
          } 
        },
        'typing4': {
          from: {
            width: '0'
          }, to: {
            width: '11ch',
          } 
        },
        'blinking': {
          '50%': {
            borderColor: 'transparent'
          }
        },
      },
      animation: {
       'girar': 'girar 5s both',
       'hover': 'hover 8s both',
       'hoverBalao': 'hoverBalao 9s both',
       'typing1': 'typing1 4s steps(21)',
       'typing2': 'typing2 4s steps(19)',
       'typing3': 'typing3 4s steps(21)',
       'typing4': 'typing4 4s steps(11), blinking 4s infinite steps-end alternate',
       'moveInBottom': 'moveInBottom 5s ease-out'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config