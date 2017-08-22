<template>
  <div id="msg">
    <div class="head">
      <h1>消息</h1>
      <span class="tips">消息中心</span>
      <mu-tabs class="tab" :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" title="动态" />
        <mu-tab value="tab2" title="关于你" />
        <mu-tab value="tab3" title="通知" />
      </mu-tabs>
    </div>
    <div class="content" @click.stop>      
      <div v-if="activeTab === 'tab1'">
        <p>—— THE END ——</p>
      </div>
      <div v-if="activeTab === 'tab2'">
        <p>—— THE END ——</p>
      </div>
      <div v-if="activeTab === 'tab3'">
        <p>—— THE END ——</p>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  },
  mounted () {
    this.$store.commit('change_header_right_icon', '')
  }
}
</script>

<style lang="scss" scoped>
#msg {
  .head {
    position: fixed;
    width: 100%;
    height: 1.066667rem;
    left: 0;
    top: 0; 
    h1 {
      height: 100%;
      line-height: 1.066667rem;
      font-weight: 400;
      font-size: 20px;
      text-align: center;
      color: #fff;
      margin: 0;
      background-color: #ff2741;
    }
    .tips {
      position: absolute;
      top: .333333rem;
      right: .333333rem;
      color: #fff;
    }
  }
  .tab {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    .mu-tab-link {
      color: rgba(0, 0, 0, .5);
    }
    .mu-tab-active {
      color: #000;
    }
  }
  .content {
    padding-top: 85px;
    height: 100vh;
    text-align: center;
    margin-top: 50px;
    font-weight: 600;
    color: #ccc;
  }
}
</style>