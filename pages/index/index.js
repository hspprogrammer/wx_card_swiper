Page({
  data:{
      cardList:[1,2,3,4,5,6,7,8,9,10]
  },
  nextCard(e){
      const {direction} = e.currentTarget.dataset;
      const cardSwiper = this.selectComponent('#heartCardSwiper')
      cardSwiper.nextCard(direction)
  },
  cardChange(e){
      const {direction,index} = e.detail;
      // console.log(e)
      if(index>this.data.cardList.length-3){
          this.setData({
              cardList:[...this.data.cardList,...[1,2,3,4,5,6,7,8,9,10]]
          })
      }
  }
})