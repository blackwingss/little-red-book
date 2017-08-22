<template>
  <div id="buy">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="slide" v-for="(item, index) in buyData.ad_banner" :key="index">
        <img :src="item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="classification">
      <div class="cf">
        <div class="item">
          <div class="item-img img-1"></div>
          <p class="item-text">护肤彩妆</p>
        </div>
        <div class="item">
          <div class="item-img img-2"></div>
          <p class="item-text">个人助理</p>
        </div>
        <div class="item">
          <div class="item-img img-3"></div>
          <p class="item-text">母婴</p>
        </div>
        <div class="item">
          <div class="item-img img-4"></div>
          <p class="item-text">包包配饰</p>
        </div>
        <div class="item">
          <div class="item-img img-5"></div>
          <p class="item-text">服装鞋帽</p>
        </div>
      </div>
      <div class="cf">
        <div class="item">
          <div class="item-img img-6"></div>
          <p class="item-text">家电数码</p>
        </div>
        <div class="item">
          <div class="item-img img-7"></div>
          <p class="item-text">家居</p>
        </div>
        <div class="item">
          <div class="item-img img-8"></div>
          <p class="item-text">美颜保健</p>
        </div>
        <div class="item">
          <div class="item-img img-9"></div>
          <p class="item-text">美食</p>
        </div>
        <div class="item">
          <div class="item-img img-10"></div>
          <p class="item-text">更多分类</p>
        </div>
      </div>
    </div>
    <div class="ads">
      <div class="ad ad-second">
        <img :src="buyData.ad_block1">
      </div>
      <div class="ad ad-third">
        <div class="ad ad-third-l">
          <img :src="buyData.ad_block2">
        </div>
        <div class="ad ad-third-r">
          <img :src="buyData.ad_block3">
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-l">
        <div class="item" v-for="(item, index) in buyData.product[0]" :key="index">
          <img :src="item">
        </div>        
      </div>
      <div class="card-r">
        <div class="item" v-for="(item, index) in buyData.product[1]" :key="index">
          <img :src="item">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction'
        }
      }
    },
    computed: {
      buyData () {
        return this.$store.getters.getBuyData
      }
    },
    mounted() {
      this.$store.dispatch('pullBuyData')
      this.$store.commit('change_header_right_icon', 'icon-fenlei')
    }
  }

</script>

<style lang="scss" scoped>
  #buy {
    width: 100%;
    margin-top: 1.066667rem;
    padding-bottom: 100px;
    background-color: #f5f8fa;
    .swiper {
      width: 100%;
      height: 4.7rem;
      ;
      .slide {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .swiper-pagination {
        text-align: right;
        padding-right: .266667rem;
        color: #fff;
      }
    }
    .classification {
      padding: .266667rem;
      background-color: #fff;
      .cf {
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        .item {
          width: 20%;
          &:first-child {
            margin-bottom: .266667rem;
          }
          .item-img {
            width: 1.2rem;
            height: 1.2rem;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            background-position: center;
            background-size: 1.2rem 1.2rem;
            background-repeat: no-repeat;
            margin: 0 auto;          
          }
          .img-1 {
            background-image: url(../assets/images/buy_05.png)
          }
          .img-2 {
            background-image: url(../assets/images/buy_07.png)
          }
          .img-3 {
            background-image: url(../assets/images/buy_09.png)
          }
          .img-4 {
            background-image: url(../assets/images/buy_11.png)
          }
          .img-5 {
            background-image: url(../assets/images/buy_13.png)
          }
          .img-6 {
            background-image: url(../assets/images/buy_20.png)
          }
          .img-7 {
            background-image: url(../assets/images/buy_21.png)
          }
          .img-8 {
            background-image: url(../assets/images/buy_22.png)
          }
          .img-9 {
            background-image: url(../assets/images/buy_23.png)
          }
          .img-10 {
            background-image: url(../assets/images/buy_24.png)
          }
          .item-text {
            text-align: center;
            margin-top: .133333rem;
          }
        }
      }
    }
    .ads {
      background-color: #fff;
      width: 100%;
      margin-top: .4rem;
      .ad {
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .ad-second {
        text-align: center;
        height: 2.5rem;
        border-bottom: 1px solid #ccc;
      }
      .ad-third {
        height: 2.7rem;
        display: flex;
        display: -webkit-flex;
        .ad-third-l {
          width: 50%;
          text-align: center;
          border-right: 1px solid #ccc;
        }
        .ad-third-r {
          width: 50%;
          text-align: center;
        }
      }
    }
    .card {
      display: flex;
      display: -webkit-flex;
      justify-content: space-around;
      .card-l, .card-r {
        width: 45%;
        .item {
          width: 100%;
          background-color: #fff;
          margin-top: .4rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>