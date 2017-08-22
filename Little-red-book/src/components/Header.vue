<template>
  <div id="header" v-show="showHeader">
    <div class="input-box" @click="showSearch">
      <i class="iconfont icon-sousuo-copy"></i>&nbsp;&nbsp;搜素笔记，商品和用户
    </div>
    <div class="icon-box">
      <i class="iconfont" :class="iconClass"></i>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    iconClass () {
      return this.$store.getters.getHeaderState.iconClass
    },
    showHeader () {
      return this.$store.getters.getHeaderState.showHeader
    }
  },
  methods: {
    showSearch () {
      this.$store.commit('show_search_cop')
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  display: -webkit-flex;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #ff2741;
  justify-content: center;
  align-items: center;
  height: 1.066667rem;
  padding: 0 .4rem;
  box-sizing: border-box;
  z-index: 10001;
  .input-box {
    flex: 1;
    height: .8rem;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-color: rgba(0,0,0,.2);    
    font-size: 14px;
    line-height: .8rem;
    text-indent: .266667rem;
    color: #fff;
  }
  .icon-box {
    width: .8rem;    
    text-align: center;
    margin-left: .133333rem;
    .iconfont {
      color: #fff;
      font-size: 22px!important;
    }
  }
}
</style>
