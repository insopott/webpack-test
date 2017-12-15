var webpack=require('webpack');
var path=require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
    entry:{app:[
        './src/app.js',
        './src/main.scss'
      ]},
    output:{
      path:path.resolve(__dirname,'./dist'),
      filename:'[name].js'
    },
    module:{
        rules:[
        /*  {
           test: /\.css$/,
           use: ExtractTextPlugin.extract({
             fallback: "style-loader",
             use: "css-loader"
           })
         },*/
          {
            test:/\.s[ac]ss$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ['css-loader','sass-loader'],
            })

          },
          {
            test:/\.css$/,
            use:['style-loader','css-loader']//this runs right to left
          },
          {
             test: /\.js$/,
             exclude: /node_modules/,
              loader: "babel-loader"
           }

        ],//end of rules array

    },//end of module object
    plugins: [
        new ExtractTextPlugin('[name].css'),
    ]


};
