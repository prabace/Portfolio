/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    
],
  theme: {
    screens: {

      'mobile': '360px',
      // => @media (min-width: 400px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      animation: {
        "slide-in-top": "slide-in-top 1s ease-in-out both",
        "slide-in-top1": "slide-in-top1 1.2s ease-in-out both",
        "slide-in-top2": "slide-in-top2 1.4s ease-in-out both",
        "slide-in-top3": "slide-in-top3 1.6s ease-in-out both",
        "slide-in-top4": "slide-in-top4 1s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-out-top": "slide-out-top 2s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both"
        
    },
    keyframes: {
        "slide-in-top": {
            "0%": {
                transform: "translateY(-1000px)",
                opacity: "0"
            },
            to: {
                transform: "translateY(0)",
                opacity: "1"
            }
        },
        "slide-in-top1": {
          "0%": {
              transform: "translateY(-1000px)",
              opacity: "0"
          },
          to: {
              transform: "translateY(0)",
              opacity: "1"
          }
      },
      "slide-in-top2": {
        "0%": {
            transform: "translateY(-1000px)",
            opacity: "0"
        },
        to: {
            transform: "translateY(0)",
            opacity: "1"
        }
    },
    "slide-in-top3": {
      "0%": {
          transform: "translateY(-1000px)",
          opacity: "0"
      },
      to: {
          transform: "translateY(0)",
          opacity: "1"
      }
  },
    "slide-in-top4": {
      "0%": {
          transform: "translateY(-1000px)",
          opacity: "0"
      },
      to: {
          transform: "translateY(0)",
          opacity: "1"
      }
  },
  "slide-out-top": {
    "0%": {
        transform: "translateY(0)",
        opacity: "1"
    },
    to: {
        transform: "translateY(-1000px)",
        opacity: "0"
    }
},
    },
     scale:{
        '500': '5',
        '200': '2',
      },

      
      
      fontFamily:{
        heading:['Advent Pro', 'sans-serif'],
        subheading:['Exo', 'sans-serif'],
        nav:['Share Tech Mono', 'monospace'],
        ham:['Orbitron','sans-serif']
     },
    },
  },
  plugins: [
    require('taos/plugin'),
    require('flowbite/plugin'),
  ],
}