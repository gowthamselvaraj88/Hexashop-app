/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  plugins: [
    // ...
    require("flowbite/plugin"),
  ],
  theme: {
    // container: {
    //   padding:{
    //     DEFAULT: '1rem',
    //     sm:'2rem',
    //     lg:'4rem',
    //     xl:'5rem',
    //     '2xl':'6rem'
    //   }
    // }
    extend: {},
  }
 
}

