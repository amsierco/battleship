const path = require('path');

module.exports = {
    entry: [
        './src/Ship.js',
        './src/testing/Ship.test.js',
        './src/Board.js',
        './src/testing/Board.test.js',
        './src/Player.js',
        './src/testing/Player.test.js',
        './src/GameManager.js'
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