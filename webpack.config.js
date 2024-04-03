// module.exports = {
//     entry: './scripts/index.js',

//     mode: "development",
//     output: {
//         path: __dirname + '/public',
//         filename: 'bundle.js',
//     },
//     watch: true,
//     resolve: {
//         extensions: ['.js', '.mjs'],
//     },
// };

module.exports = [
    {
      entry: "./scripts/index.js",
      mode: "development",
      output: {
        path: __dirname + "/public",
        filename: "index.bundle.js",
      },
      watch: true,
      devtool: 'eval-source-map',
    },
    {
      entry: "./modules/createMovie.js",
      mode: "development",
      output: {
        path: __dirname + "/public",
        filename: "createMovie.bundle.js",
      },
      watch: true,
      devtool: 'eval-source-map',
    },
];