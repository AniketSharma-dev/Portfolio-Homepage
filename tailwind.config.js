/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#3490DE",
      },
      width: {
        '350': '350px',
      },
      height: {
        '350': '350px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(160deg, #14a2cd, #ff00b7)',
        'text-gradient1': 'linear-gradient(19deg, #ffa200, #ff4949)',
        'text-gradient2': 'linear-gradient(19deg, #3490DE, #ec4899)',
      },
      
    },
  },
  plugins: [],
};
