/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            Poppins: "Poppins",
        },
        extend: {
            colors: {
                Teal: "#2F6C6D",
                HummingBird: "#d1f1ee",
                yellow: "#e4d63b",
                Solitude: "#e9e9ea",
                gray: "#4B4B4C",
            },
            animation: {
                slide: "slide 20s linear infinite",
            },
            keyframes: {
                slide: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
            },
        },
        screens: {
            xs: "480px",
            sm: "768px",
            md: "1060px",
        },
    },
    plugins: [],
};
