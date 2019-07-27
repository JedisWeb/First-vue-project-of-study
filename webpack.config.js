const path = require('path')

const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: "development", //模式
  entry: path.resolve(__dirname, './src/main.js'), //入口
  output: { //打包文件路径
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    open: true,
    port: 3000,
    contentBase: 'src',
    hot: true
  },
  plugins: [ //插件
    new webpack.HotModuleReplacementPlugin(), //热更新模块
    new htmlWebpackPlugin({ //内存预加载html组件文件路径
      template: path.resolve(__dirname, './src/index.html'),
      finename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [{ //匹配规则
        test: /\.css$/, // 正则匹配
        use: ['style-loader', 'css-loader'] // 加载包
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|gif|bmp\jpeg)$/,
        // limit：图片最大字节数，超过就会默认使用base64加密  
        // [hash:8]：8位hash值 
        // [name].[ext]：文件名不变，文件类型不变
        use: ['url-loader?limit=1000&name=[hash:8]-[name].[ext]']
      }, {
        test: /\.(ttf|eot|sbg|woff|woff2)$/,
        use: ['url-loader']
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/ // 处理.js文件排除 node_modules 中的插件的.js文件 速度慢 项目运行会报错
      }, {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      // "vue$":"vue/dist/vue.js"
    }
  }
}