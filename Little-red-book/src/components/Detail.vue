<template>
  <div id="detail" v-show="showDetail">
    <div class="detail-top">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="slide">
          <img :src="data.imgUrl">
        </swiper-slide>
        <swiper-slide class="slide">
          <img :src="data.imgUrl">
        </swiper-slide>
        <swiper-slide class="slide">
          <img :src="data.imgUrl">
        </swiper-slide>
        <swiper-slide class="slide">
          <img :src="data.imgUrl">
        </swiper-slide>
        <swiper-slide class="slide">
          <img :src="data.imgUrl">
        </swiper-slide>
        <swiper-slide class="slide">
          <img :src="data.imgUrl">
        </swiper-slide>
        <swiper-slide class="slide">
          <img :src="data.imgUrl">
        </swiper-slide>
        <swiper-slide class="slide">
          <img :src="data.imgUrl">
        </swiper-slide>
        <swiper-slide class="slide">
          <img :src="data.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="back-btn" @click="back">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="menu-btn">
        <i class="iconfont icon-caidan"></i>
      </div>
    </div>
    <div class="detail-userinfo">
      <div class="wrapper">
        <div class="user">
          <span class="user-avatar">
            <img :src="data.userAvatar">
          </span>
          <span class="user-name">{{data.userName}}</span>
        </div>
        <div class="focus">
          <i class="iconfont icon-add"></i>关注
        </div>
      </div>
    </div>
    <div class="detail-content">
      <p class="title">{{data.title}}</p>
      <p class="main">{{data.desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  },
  computed: {
    showDetail () {
      return this.$store.getters.getShowDetail
    },
    data () {
      return this.$store.getters.getDetailItem
    }
  },
  methods: {
    back () {
      this.$store.commit('hidden_detail_cop')
    }
  }
}
</script>

<style lang="scss">
#detail {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  width: 100%;
  overflow: auto;
  height: 100%;
  background-color: #fff;
  .detail-top {
    width: 100%;
    .swiper {
      width: 100%;
      img {
        width: 100%;
      }
      .swiper-pagination {
        text-align: right;
        padding-right: .266667rem;
        color: #fff;
      }
    }
    .back-btn,
    .menu-btn {
      position: fixed;
      top: .32rem;
      color: #fff;
      z-index: 9999;
      .iconfont {
        font-weight: 900;
        font-size: 21px!important;
      }      
    }
    .back-btn {
      left: .266667rem;
    }
    .menu-btn {
      right: .266667rem;
    }
  }
  .detail-userinfo {    
    padding: 0 .266667rem;
    .wrapper {
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      padding: .133333rem 0;
      .user {
        .user-avatar {
          vertical-align: middle;
          display: inline-block;
          width: .8rem;
          height: .8rem;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .user-name {
          font-size: 16px;
          padding-left: .133333rem;
          text-overflow:ellipsis; 
        }
      }
      .focus {
        height: .666667rem;
        width: 1.2222rem;
        color: #ff2741;
        line-height: .666667rem;
        text-align: center;
        border: 1px solid #ff2741;
        -webkit-border-radius: 7px;
        -moz-border-radius: 7px;
        border-radius: 7px;
      }
    }       
  }
  .detail-content {
    padding: .266667rem;
    .title {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 30px;
    }
    .main {
      font-size: 16px;
    }
  }
}
</style>