/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      width: {
        '[card-img-w]': '270px',
        '[card-img-sm-w]': '135px',
      },
      height: {
        '[card-img-h]': '386px',
        '[card-img-sm-h]': '193px',
      },
    },
  },
  plugins: [],
};
