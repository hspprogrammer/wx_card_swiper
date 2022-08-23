Page({
  data:{
      cardList:[1,2,3,4,5,6,7,8,9,10],
      nextPageData:[11,12,13,14,15,16,17,18,19,20]
  },
  nextCard(e){
      const {direction} = e.currentTarget.dataset;
      const cardSwiper = this.selectComponent('#heartCardSwiper')
      cardSwiper.nextCard(direction)
  },
  cardChange(e){
      const {direction,index} = e.detail;
      if(index>this.data.cardList.length-3){
      }
  }
})