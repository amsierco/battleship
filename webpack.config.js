const path = require('path');

module.exports = {
    entry: [
        './src/Ship.js',
        './src/testing/Ship.test.js',
        ],
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
};