<template>
  <div id="footer">
    <div class="item">
      <router-link to="/" tag="div" exact>
        <div><i class="iconfont icon-home"></i></div>
        <p>首页</p>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/find" tag="div" exact>
        <div><i class="iconfont icon-sousuo"></i></div>
        <p>发现</p>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/buy" tag="div" exact>
        <div><i class="iconfont icon-gouwuche"></i></div>
        <p>购买</p>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/msg" tag="div" exact>
        <div><i class="iconfont icon-informatiom"></i></div>
        <p>消息</p>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/me" tag="div" exact>
        <div><i class="iconfont icon-user"></i></div>
        <p>我</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#footer {
  display: flex;
  display: -webkit-flex;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  border-top: .006667rem solid #ccc;
  padding: .1267rem 0;
  z-index: 999;
  background-color: #fff;
  .item {
    width: 20%;
    text-align: center;
    color: #ccc;
    div {
      font-size: 16px;
      .iconfont{
        font-size: 20px!important;
      }
      &.router-link-active {
        color: #ff2741;
      }
    }    
  }
  
}
</style>