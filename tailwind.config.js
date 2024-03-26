/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                myfont: ["EduNSWACTFoundation-VariableFont_wght"],
            },
            backgroundImage: {
                "hero-pattern": "url('./img/img3.png')",
                "hero-pattern2": "url('./img/img2.jpg')",
                "hero-pattern3": "url('./img/img6.jpg')",
                "hero-pattern4": "url('./img/img7.jpg')",

            },
        },
    },
    plugins: [],
};
