module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',

  ],
  plugins: ['transform-export-extensions', '@babel/transform-runtime', 'babel-plugin-styled-components']
};