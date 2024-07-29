/** @type {import('tailwind').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        colors: {
            purple: "#4B0195",

            green: "#00D293",
            cyan: "#00CFDC",

            green60: "rgba(0, 210, 147, 0.6)",
            cyan60: "rgba(0, 207, 220, 0.6)",

            pink: "#DC00B9",
            red: "#D20032",

            pink60: "rgba(220, 0, 185, 0.5)",
            red60: "rgba(210,0, 50,0.6)",

            grey: "rgba(1, 0, 6, 0.3)",

            green2: "#71FFCC",
            pink2: "#FF60B6",
        },
        fontFamily: {
            poppins: "Poppins",
        },
        extend: {},
    },
    plugins: [],
};
