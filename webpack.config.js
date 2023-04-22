const path = require('path');

module.exports = {
    entry: [
        './src/DOM.js',
        './src/Player.js',
        './src/Ship.js',
        './src/Board.js',
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