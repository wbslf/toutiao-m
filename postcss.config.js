/**
 * PostCSS的配置文件
 * PostCSS是基于Node.js运行的一个处理css的工具
 * 所以它的配置文件也是运行在Node.js中
 */
// PostCSS配置文件需要导出一个对象
module.exports = {
  // 配置需要使用的插件
  plugins: {
    // 自动添加浏览器厂商声明前缀，用来兼容不同的浏览器
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8"
        //'last 10 versions', // 所有主流浏览器最近10版本用
      ],
      grid: true
    },
    // 把px转化为rem
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};