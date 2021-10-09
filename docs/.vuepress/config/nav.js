// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/pages/22eba5/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端开发规范',
        link: '/pages/7efc0d/',
      },
      {
        text: '学习笔记',
        items: [
          { text: 'JavaScript', link: '/pages/c143a1/' },
          { text: 'Vue', link: '/pages/6e16ca/' },
          { text: 'React', link: '/pages/6e16ca/' },
          { text: 'CSS & CSS3', link: '/pages/feeb44/' },
          { text: '前端工具库', link: '/pages/544e25/' },
          {
            text: 'JavaScript设计模式',
            link: '/pages/4643cd/',
          },
          { text: 'Webpack', link: '/pages/04e151/' },
          { text: 'HTML5', link: '/pages/610454/' },
          { text: '小程序', link: '/pages/fcfddf/' },
          { text: 'Git', link: '/pages/fc37fd/' },
          {
            text: 'Nginx',
            link: '/pages/2f7a6a/',
          },
          { text: 'Linux', link: '/pages/c7e872/' },
          { text: '浏览器原理', link: '/pages/5a08c4/' },
          { text: '算法与数据结构', link: '/pages/0b662e/' },
        ],
      },
    ],
  },
  {
    text: '源码系列',
    link: '/pages/5dced6/',
    items: [
      { text: 'Vue2.0源码解析', link: '/pages/5dced6/' },
      { text: 'Vue3.0源码解析', link: '/pages/4c778760be26d8b3/' },
      { text: 'React源码解析', link: '/pages/117708e0af7f0bd9/' },
    ],
  },
  {
    text: 'Golang',
    link: '/pages/fde094/',
    items: [
      { text: '环境搭建', link: '/pages/fde094/' },
      {
        text: '基础中的基础',
        link: '/pages/11cd51/',
      },
    ],
  },
  {
    text: 'Node.js',
    link: '/pages/642842/',
  },

  // {
  //   text: '更多',
  //   link: '/more/',
  //   items: [
  //     { text: '学习', link: '/pages/f2a556/' },
  //     { text: '面试', link: '/pages/aea6571b7a8bae86/' },
  //     { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
  //     { text: '实用技巧', link: '/pages/baaa02/' },
  //     { text: '友情链接', link: '/friends/' },
  //   ],
  // },

  // {
  //   text: '收藏',
  //   link: '/pages/beb6c0bd8a66cea6/',
  // items: [
  //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
  //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
  //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
  // ],
  // },
  {
    text: '网站概览',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  { text: '关于', link: '/about/' },
];
