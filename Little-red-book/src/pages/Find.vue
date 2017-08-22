<template>
  <div id="find">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="slide" v-for="(item, index) in findData.banner" :key="index">
        <img :src="item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="card">
      <div class="card-head">
        <div class="title">热门话题</div>
        <div class="more">查看更多&nbsp;<i class="iconfont icon-icon"></i></div>  
      </div>
      <div class="card-main">
        <div class="item" v-for="(item, index) in findData.hotTopic" :key="index">
          <div class="item-img">
            <img :src="item.topicImg">
          </div>
          <div class="item-text">
            <p class="keywords">{{item.keyword}}</p>
            <p class="count">{{item.joinCount}}人参与</p>
          </div>
          <div class="item-arrow"><i class="iconfont icon-icon"></i></div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-head">
        <div class="title">全球购物</div>
        <div class="more">查看更多&nbsp;<i class="iconfont icon-icon"></i></div>
      </div>
      <div class="card-main">
        <ul>
          <li v-for="(item, index) in findData.globalBuy" :key="index">
            <div class="item-img">
              <img :src="item.cityImg">
            </div>
            <div class="item-desc">
              <p class="title"># {{item.cityName}}</p>
              <p class="count">{{item.newCount}}篇更新</p>
            </div>
          </li>
          <li>
            <span class="more-zh">查看更多</span>
            <p class="more-en">view more</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="card">
      <div class="card-head">
        <div class="title">热门视频</div>
        <div class="more">查看更多&nbsp;<i class="iconfont icon-icon"></i></div>
      </div>
      <div class="card-main">
        <ul>
          <li v-for="(item, index) in findData.hotVideo" :key="index">
            <div class="item-img">
              <img :src="item.album">
            </div>
            <div class="item-desc">
              <p class="desc">{{item.title}}</p>
            </div>
          </li>
          <li>
            <span class="more-zh">查看更多</span>
            <p class="more-en">view more</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="card">
      <div class="card-head">
        <div class="title">热门长笔记</div>
      </div>
      <div class="card-main">
        <div class="item" v-for="(item, index) in findData.hotNote" :key="index">
          <div class="item-img">
            <img :src="item.album">
          </div>
          <div class="item-text">
            <p class="title">{{item.title}}</p>
            <p class="desc">{{item.desc}}</p>
            <p class="topic">{{item.keywords}}</p>
          </div>
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
      findData () {
        return this.$store.getters.getFindData
      }
    },
    mounted () {
      this.$store.dispatch('pullFindData')
      this.$store.commit('change_header_right_icon', 'icon-tianjiahaoyou')
    }
  }
</script>

<style lang="scss" scoped>
  #find {
    width: 100%; 
    margin-top: 1.066667rem;
    padding-bottom: 100px;
    background-color: #f5f8fa;
    .swiper {
      width: 100%;
      height: 3.5rem;;
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
    .card {
      width: 100%;
      background-color: #fff;
      padding: .133333rem 0 .133333rem .266667rem;
      margin-top: .3rem;      
      .card-head {
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        align-items: center;        
        font-size: 14px;
        .title {
          border-left: 2px solid #ff2741;
          padding-left: .233333rem;
        }
        .more {
          color: #ccc;
          padding-right: .133333rem;
        }
      }
      .card-main {
        overflow-x: auto;   
        .item {
          display: flex;
          display: -webkit-flex;
          justify-content: space-between;
          border-bottom: 1px solid #ccc;
          padding: .233333rem 0;
          &:last-child {
            border-bottom: none;
          }
          .item-img {
            width: 1.666667rem;
            height: 1.666667rem;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .item-text {
            flex: 1;
            padding: .266667rem 0 .266667rem .213333rem;
            overflow: hidden;
            .keywords {
              font-size: 16px;
            }
            .title {
              font-size: 14px;
              text-overflow:ellipsis;
              overflow:hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .count {
              color: #ccc;
              font-size: 14px;
            }
            .desc {
              color: #ccc;
              text-overflow:ellipsis;
              overflow:hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .topic {
              color: blue;
              white-space:nowrap; 
              text-overflow:ellipsis;
              overflow:hidden;
            }  
          }
          .item-arrow {
            width: .566667rem;
            color: #ccc;
            line-height: 1.666667rem;
          }
        }
        ul{
          padding: .333333rem 0;
          width: 28.933333rem;
          li {
            float: left;
            width: 3.733333rem;
            margin-right: .4rem;
            .item-img {
              width: 100%;
              height: 2.7rem;
              overflow: hidden;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              border-radius: 5px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .item-desc {
              margin-top: .266667rem;
              overflow: hidden;
              .desc {
                text-overflow:ellipsis;
                overflow:hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                }
            }
            &:last-child {
              height: 2.7rem;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              border-radius: 5px;
              border: 1px solid #ccc;
              text-align: center;
              margin-right: 0; 
              .more-zh {
                display: inline-block;
                padding-bottom: .12rem;
                border-bottom: 1px solid #ccc;
                margin-top: .533333rem;
                margin-right: 0;
              }
            }
          }          
        }
      }     
      &:last-child {
        .card-main {
          .item {
            padding: .333333rem 0;
            .item-img {
              width: 3.733333rem;
              height: 2.8rem;
            }
            .item-text {
              flex: 1;              
              padding: 0 .213333rem;
              display: flex;
              display: -webkit-flex;
              flex-direction: column;
              justify-content: space-between;                          
            }
          }
        }
      }
    }
  }
</style>