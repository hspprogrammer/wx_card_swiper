
公司最近要做一个类似于探探滑动卡片的需求，经过周五和周末两天的啪啦啪啦，终于做出来基本符合需求的组件，最终的效果图就是这样的了。
[效果图](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/deb8989e53714d34bec48fb6bb7101cb~tplv-k3u1fbpfcp-watermark.image)

## 小程序卡片滑动组件
### 介绍
此组件是使用原生微信小程序代码开发的一款高性能的卡片滑动组件，无外部依赖，导入即可使用。其主要功能效果类似探探的卡片滑动。
### 用法
##### 获取：
```
git clone https://github.com/hspprogrammer/wx_card_swiper.git
```
##### 相关文件介绍：
- /components 
  
  - /cardSwiper
- /pages
    - /index
        - /components
            - /card
  
**其中，components文件夹下的card组件是cardSwipe组件的[抽象节点](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/generics.html)，放置卡片内容，需要调用者自己实现。而cardSwipe组件为卡片功能的具体实现。pages下的index为调用组件的页面，可供参考。**

### 功能介绍
##### 亮点：
- 动态新增
- 卡片的wxml节点数不受卡片列表的大小影响，只等于卡片展示数，如果每次只展示三张卡片，那么卡片所代表的节点数只有三个
- 支持调节各种属性（滑动速度，旋转角度，卡片展示数...等等）
- 支持点击切换

### 优化
##### 由于组件支持动态的删除以及替换，这使得我们可以以很小的卡片列表来展示超多（or 无限）的卡片
场景1：实现一个超多的卡片展示（比如1000张）

原本实现思路：利用wx:if,只渲染当前展示的card和后面两张card,然后监听cardChange回调函数，再切换到比如最后三张的时候请求下一页数据，直接push到渲染的数组中，因为有wx:if的控制，虽然数据增多，但渲染的节点还是只有三个。具体的性能没有测试，但在手机测试时候，直观感觉没有多大的性能问题。

新的实现思路：首先要实现循环展示的逻辑，以分页的形式每次从后台获取数据，先获取第一页cardsData和第二页nextPageData的数据。每切换一张图片就从nextPageData拿到相同位置的数据替换cardsData的数据，当切换到第一页的最后showNum（一次性展示几个card）条数据时候，会进入到循环从头重新开始渲染cardsData的数据，这个时候cardsData里的数据实际是下一页nextPageData的数据，同时再请求第三页的数据赋值给nextPageData，循环往复。。。。。。

感谢[思路来源](https://github.com/1esse/cardSwipe)提供思路，代码逻辑自己实现。
