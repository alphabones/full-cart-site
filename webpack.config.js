// Includes
// --------------------
const path = require("path");

// Plugin/Option Includes
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Configuration
// --------------------
const projectRoot = path.resolve(__dirname, ".");

// Filename is always hashed, but can be branched here if need
const baseFileName = "[name]";
process.traceDeprecation = true;

// Plugins
// --------------------
// Decalred before rules so they can be used inside rules
const plugins = [];

const extractSass = new ExtractTextPlugin({
  filename: baseFileName + ".css",
  disable: false
});

plugins.push(extractSass);

// Rules
// --------------------
const rules = [];
const ruleScss = {
  test: /\.scss$/,
  use: extractSass.extract({
    use: [
      {
        loader: "css-loader"
      },
      {
        loader: "sass-loader"
      }
    ],
    // use style-loader in development
    fallback: "style-loader"
  })
};

rules.push(ruleScss);

const generateFileRule = ext => {
  return {
    test: new RegExp(`\\.${ext}$`),
    loader: "file-loader"
  };
};

const fileRuleTypes = [
  "jpg",
  "gif",
  "png",
  "eot",
  "ttf",
  "woff",
  "woff2",
  "svg"
];

fileRuleTypes.forEach(type => {
  rules.push(generateFileRule(type));
});

// Output
// ---------------------
module.exports = {
  entry: {
    ['main']: [
      path.resolve(projectRoot, `themes/agency/assets/manifest.js`)
    ]
  },
  // Depnding on process.env, this should be either a hash or a name
  output: {
    path: path.resolve(projectRoot, "themes/agency/static/css"),
    filename: baseFileName + ".js"
  },
  module: { rules },
  plugins
};
