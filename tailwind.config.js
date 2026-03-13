/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#F9FAFB', // Crisp light background
                primary: '#FFFFFF', // Clean white for cards
                accent: '#0A4A9B',  // Engineering Corporate Blue
                text: '#0B1120',    // Deep Navy/Black for stark contrast
            },
            fontFamily: {
                sans: ['"Space Grotesk"', 'sans-serif'],
                drama: ['"DM Serif Display"', 'serif'],
                mono: ['"Space Mono"', 'monospace'],
            },
        },
    },
    plugins: [],
}
