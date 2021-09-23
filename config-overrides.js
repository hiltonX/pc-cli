const path = require("path");
const {
    override,
    fixBabelImports,
    addWebpackAlias,
    addWebpackPlugin,
    addDecoratorsLegacy,
    overrideDevServer
} = require('customize-cra')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
 
const env = process.env.NODE_ENV || 'dev'
const isDev = env === 'dev'

const alter_config= ()=>(config, env)=>{
    const oneOf_loc= config.module.rules.findIndex(n=>n.oneOf)
    config.module.rules[oneOf_loc].oneOf=[
      { 
        test: /\.css$/, 
        use: [ 
          isDev ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ]
      }, {
          test: /\.styl$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'stylus-loader',
          ],
          include: [path.resolve(__dirname, 'src')],
          exclude: /node_modules/,
        }, 
        ...config.module.rules[oneOf_loc].oneOf
    ]
 
    return config
}
 
module.exports= {
  devServer: overrideDevServer(config => {
    config.proxy = {
      '/api': {
        target: 'http://172.16.55.76:8888',
        changeOrigin: true,
      }
    }
    return config
  }),
  webpack: override(
    alter_config(),   //将自定义配置组合进来
    addWebpackAlias({  //增加路径别名的处理
        '@': path.resolve('./src')
    }),
    addWebpackPlugin(
      new MiniCssExtractPlugin()
    ),
    fixBabelImports('import', {  //antd UI组件按需加载的处理
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addDecoratorsLegacy() // 修饰符
  ) 
}