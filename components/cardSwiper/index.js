
Component({
  externalClasses: ['my_cards_panel','my_card_item_panel','my_card_item'],
  properties: {
    cardsData:{
      type:Array,
      value:[]
    },
    //卡片纵坐标偏移距离 单位rpx
    offsetY:{
      type:Number,
      value:15
    },
    // 缩小比例
    scale:{
      type:Number,
      value:0.1
    },
    //一次性展示几个card
    showNum:{
      type:Number,
      value:3
    },
    slideThershold: { // 松手后滑出界面阈值，单位px
      type: Number,
      value: 60
    },
    // 整个滑动过程旋转角度
    rotateDeg:  { 
      type: Number,
      value: 20
    }, 
    // card 展示范围宽度 单位px
    showRangeW:{ 
      type: Number,
      value: 750
    },
// 手指离开屏幕后滑出界面时长，单位(ms)毫秒
    slideDuration: { 
      type: Number,
      value: 200
    },
  },
  data: {
    nowIndex:0,//当前最上方展示的card index
    randerCardsData:[],//要渲染的card数组
    isNextFunChangeCard:false,//是否通过next事件出发卡片切换
  },
  attached(){
    this.setData({
      showRangeW:this.rpx2px(this.data.showRangeW)
    })
  },
  methods: {
    //card Change回调
    cardChange({direction,index}){
      console.log({index})
      this.setData({
        nowIndex:index
      })
      this.triggerEvent('cardChange', {direction,index})
    },
    rpx2px (rpx) {
      const sysinfo = wx.getSystemInfoSync();
      return Math.floor(rpx / 750 * sysinfo.windowWidth);
    },
  }
})
