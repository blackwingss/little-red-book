<template>
  <div id="home" ref="home">
    <div class="menu">
      <!-- 滑动导航栏 -->
      <div class="menu-list" ref="menuList" v-show="show">
        <ul @click="handleOnLi" ref="Ul1">
          <li data-index="0" data-type="all" class="active">推荐</li>
          <li data-index="1" data-type="focus">关注</li>
          <li data-index="2" data-type="location">深圳</li>
          <li data-index="3" data-type="man">男人</li>
          <li data-index="4" data-type="skin">护肤</li>
          <li data-index="5" data-type="family">居家</li>
          <li data-index="6" data-type="fashion">时尚</li>
          <li data-index="7" data-type="food">美食</li>
          <li data-index="8" data-type="sports">运动</li>
          <li data-index="9" data-type="travel">旅行</li>
          <li data-index="10" data-type="adornment">彩妆</li>
          <li data-index="11" data-type="matherAndBaby">母婴</li>
        </ul>        
      </div>
      <!-- 动态导航栏 -->
      <div class="all-items" v-show="!show">
        全部选项
      </div>
      <div class="drop-icon" @click="show = !show">
        <i class="iconfont" :class="show ? 'icon-xiala' : 'icon-xiala-copy'"></i>
      </div>
    </div>
    <!-- 动态选项 -->
    <transition name="tanslate">
    <div class="dropdown" @click="show = true" v-show="!show">
      <ul @click="handleOnLi" ref="Ul2">
        <li data-index="0" data-type="all" class="active">推荐</li>
        <li data-index="1" data-type="focus">关注</li>
        <li data-index="2" data-type="location">深圳</li>
        <li data-index="3" data-type="man">男人</li>
        <li data-index="4" data-type="skin">护肤</li>
        <li data-index="5" data-type="family">居家</li>
        <li data-index="6" data-type="fashion">时尚</li>
        <li data-index="7" data-type="food">美食</li>
        <li data-index="8" data-type="sports">运动</li>
        <li data-index="9" data-type="travel">旅行</li>
        <li data-index="10" data-type="adornment">彩妆</li>
        <li data-index="11" data-type="matherAndBaby">母婴</li>
      </ul>
    </div>
    </transition>
     <!-- 刷新按钮 
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh" /> -->
    <!-- 内容主体 -->
    <div class="contents">      
      <div class="content">
        <div class="detail" @click="toDetail(item)" v-for="item in homeData[0]">
          <div class="detail-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="detail-text">
            <p class="title">{{item.title}}</p>
            <p class="desc">{{item.desc}}</p>
          </div>
          <div class="detail-action">
            <div class="user">
              <span class="user-avatar">
                <img :src="item.userAvatar" alt="">
              </span>
              <span class="user-name">{{item.userName}}</span>
            </div>
            <div class="like">
              <i class="iconfont icon-xin"></i>
              <span class="like-count">{{item.likeCount}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="detail" @click="toDetail(item)" v-for="item in homeData[1]">
          <div class="detail-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="detail-text">
            <p class="title">{{item.title}}</p>
            <p class="desc">{{item.desc}}</p>
          </div>
          <div class="detail-action">
            <div class="user">
              <span class="user-avatar">
                <img :src="item.userAvatar" alt="">
              </span>
              <span class="user-name">{{item.userName}}</span>
            </div>
            <div class="like">
              <i class="iconfont icon-xin"></i>
              <span class="like-count">{{item.likeCount}}</span>
            </div>
          </div>
        </div>
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  computed: {
    homeData () {
      return this.$store.getters.getHomeData
    }
  },
  methods: {
    handleOnLi (e) {
      let oLis1, oLis2;

      oLis1 = Array.prototype.filter.call(this.$refs.Ul1.childNodes,  (childNode) => {
        return childNode.nodeType === 1
      })
      oLis2 = Array.prototype.filter.call(this.$refs.Ul2.childNodes,  (childNode) => {
        return childNode.nodeType === 1
      })
      oLis1.map(li => {
        li.classList.remove('active')      
      })
      oLis2.map(li => {
        li.classList.remove('active')
      })
      oLis1[e.target.dataset.index].classList.add('active')      
      oLis2[e.target.dataset.index].classList.add('active')

      this.type = e.target.dataset.type
      this.$store.dispatch('pullHomeData', e.target.dataset.type)

    },
    toDetail (item) {
      this.$store.commit('render_detail', item)
    }
  },
  mounted () {
    this.$store.dispatch('pullHomeData', 'all')
    this.$store.commit('change_header_right_icon', 'icon-xiangji')
  }
}
</script>

<style lang="scss" scoped>
  #home {
    position: relative;
    width: 100%;
    padding: 2.1rem 0;
    .menu {
      display: flex;
      display: -webkit-flex;
      position: fixed;
      top: 1.066667rem;
      left: 0;
      width: 100%;
      height: 1.066667rem;
      background-color: #fff;
      color: #000;
      clear: both;      
      box-sizing: border-box;
      font-size: 16px;
      border-bottom: 1px solid #ccc;
      z-index: 1001;
      .all-items {
        flex: 1;
        height: 100%;
        line-height: 1.066667rem;
        text-indent: .4rem;
      }
      .menu-list {
        overflow-x: auto;
        flex: 1;        
        ul {
          width: 260%;
          height: 1.066667rem;
          li {
            padding: 0 .43333rem;
            float: left;
            height: 100%;  
            line-height: 1.066667rem;
            transition: border-bottom .2s; 
            &.active {              
              border-bottom: 2px solid #ff2741;
            }
          }        
        }
      }
      .drop-icon {
        width: 1.066667rem;
        height: 100%;
        text-align: center;
        line-height: inherit;
        .iconfont {
          font-size: 28px!important;
        }
      }
    }
    .dropdown {
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, .3);
      z-index: 1000;      
      &.translate-enter, &.tanslate-leave-active {
        transform: scale(.97)
      }
      &.translate-enter-active, &.tanslate-leave-active {
        -webkit-transition: transform .1s ease;
        -moz-transition: transform .1s ease;
        transition: transform .1s ease;
      }
      ul {
        margin-top: 1.966667rem;
        background-color: #fff;
        width: 100%;
        height: 2.966667rem;
        li {
          float: left;
          font-size: 16px;
          width: 25%;
          height: 33.33333%;
          line-height: .988888891rem;
          text-align: center;
          border-bottom: 1px solid #ccc;
          border-left: 1px solid #ccc;
          &:nth-child(1),&:nth-child(5),&:nth-child(9) {
            border-left: none;
          }
          &.active {
            border-bottom-color: #ff2741;
          }
        }
        
      }
    }
    .contents {
      width: 100%;
      display: flex;
      display: -webkit-flex;      
      overflow-y: auto;
      justify-content: space-around;
      vertical-align: top;      
      .content {
        width: 47%;
        .detail {
          width: 100%;
          background-color: #fff;
          margin-top: .2rem;
          .detail-img {
            overflow: hidden;
            width: 100%;
            img {
              width: 100%;
            }
          }
          .detail-text {
            padding: .133333rem;
            font-size: 14px;
            overflow: hidden;
            .title {
              font-style: bold;
            }
            .desc {
              color: #ccc;
              text-overflow:ellipsis;
              overflow:hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
          .detail-action {
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            padding: .133333rem .133333rem .266667rem .133333rem;
            .user {
              flex: 1;
              overflow: hidden;
              .user-avatar {
                vertical-align: middle;
                display: inline-block;
                width: .42rem;
                height: .42rem;
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
                text-overflow:ellipsis; 
              }
            }
            .like {
              text-align: right;
              width: 50px;
              color: #ccc;    
              .iconfont {
                /* vertical-align: ; */
                font-size: 12px!important;
              }        
              .like-count {
                padding-left: .133333rem;
              }
            }
          }         
        }        
      }      
    }
  }
</style>