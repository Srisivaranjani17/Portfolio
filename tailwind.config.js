/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#181818",
        tertiary: "#1E1E1E", // Card background
        accent: {
          DEFAULT: "#FBF3A4", // Soft Yellow
          hover: "#E6D97A", // Muted accent
          glow: "rgba(251, 243, 164, 0.5)"
        },
        amber: {
          DEFAULT: "#F59E0B", // Amber 500
          hover: "#D97706", // Amber 600
          glow: "rgba(245, 158, 11, 0.45)"
        },
        card: "#1E1E1E",
        text: {
          primary: "#F5F5F5",
          secondary: "#BDBDBD",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
