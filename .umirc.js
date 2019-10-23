
// ref: https://umijs.org/config/
export default {
  history: 'hash', //采用hash路由：#/xxx的形式
base:'/',
publicPath:'/',
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       { path: '/', component: '../pages/index' },
  //       { path: '/hello', component: '../pages/test/index' },
  //       { path: '/hello2', component: '../pages/hello' },
  //     ]
  //   }
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'gshop',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],

      },
    }],
  ],
}
