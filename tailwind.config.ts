/** @type {import('tailwind').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        colors: {
            transparent: "rgba(0, 0, 0, 0)",
            primary: "rgba(var(--primary))",
            darkprimary: "rgba(var(--darkprimary))",
            secondary: "rgba(var(--secondary))",
            bearish1: "rgba(var(--bearish1))",
            bearish2: "rgba(var(--bearish2))",
            bullish1: "rgba(var(--bullish1))",
            bullish2: "rgba(var(--bullish2))",
            darkbullish: "rgba(var(--darkbullish))",
            darkbearish: "rgba(var(--darkbearish))",
        },
        fontFamily: {
            poppins: "Poppins",
        },
        extend: {
            backgroundImage: {
                arrow: "url('src/assets/arrow.svg')",
            },
        },
    },
    plugins: [],
};
