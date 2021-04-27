module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'dog': "url('https://atlantahumane.org/wp-content/uploads/2020/06/Adopt-a-Dog-Page-Header-Image.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
