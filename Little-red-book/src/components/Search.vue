<template>
  <div id="search">
    <div class="input-area">
      <div class="input-box">
        <i class="iconfont icon-sousuo-copy"></i>&nbsp;&nbsp;
        <input type="text" v-model="word" @input="handleInput">
      </div>
      <div class="icon-box" @click="close">
        取消
      </div>
    </div>
    <div class="history" v-show="notInput">
      <div class="head">
        <div class="title">历史记录</div>
        <div class="del-btn" @click="clearHistory">
          <i class="iconfont icon-del"></i>
        </div>
      </div>
      <div class="content">
        <span class="tag" v-for="(item, index) in historyWords">{{item}}</span>
      </div>
    </div>
    <div class="hot-search" v-show="notInput">
      <div class="head">
        <div class="title">热门搜素</div>
      </div>
      <div class="content">
        <span class="tag">发际线</span>
        <span class="tag">足贴</span>
        <span class="tag">阿尼玛黑管</span>
        <span class="tag">柠檬酵素</span>
        <span class="tag">渔夫帽</span>
        <span class="tag">运动内衣</span>
        <span class="tag">maxmara</span>
        <span class="tag">脱发</span>
      </div>
    </div>
    <div class="result" v-show="!notInput">
      <ul>
        <li v-for="(item, index) in result" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        word: "",
        notInput: true,
        historyWords: [],
        result: [],        
        handleInput: function(){}
      }
    },
    methods: {
      close () {
        this.$store.commit('show_search_cop')
      },
      clearHistory () {
        window.localStorage.removeItem('history')
        this.historyWords = JSON.parse(localStorage.getItem('history'))
      },
      debounce () {
        let timer
        let keywords = JSON.parse(localStorage.getItem('keywords'))        
        return () => {
          let history = JSON.parse(localStorage.getItem('history')) || []
          clearTimeout(timer)
          timer = setTimeout(() => {
            if (!this.word) {
              this.historyWords = JSON.parse(localStorage.getItem('history'))
              this.notInput = true
            } else {            
              keywords.map(keyword => {
                if (keyword.indexOf(this.word) != -1) {
                  this.notInput = false
                  this.result.push(keyword)
                }
              })
              history.push(this.word)
              localStorage.setItem('history', JSON.stringify(history))
            }            
          }, 500)
        }
      }
    },
    mounted () {
      let keywords = [
        '发际线', '足贴', '阿尼玛黑管', 
        '运动内衣', '瑜伽垫', '脱发', 
        '内蒙酵素', '渔夫帽', 'ray', 'maxmara'
      ]
      localStorage.setItem('keywords', JSON.stringify(keywords))
      this.handleInput = this.debounce().bind(this)
    }
  }
</script>

<style lang="scss">
  #search {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #f5f8fa;
    z-index: 99999;    
    .input-area {
      display: flex;
      display: -webkit-flex;
      background-color: #f5f8fa;
      justify-content: center;
      align-items: center;
      height: 1.066667rem;
      box-sizing: border-box;
      padding: 0 .4rem;
      border-bottom: 1px solid rgba(0,0,0,.4);
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
        input {
          display: inline-block;
          width: 86%;
          color: #fff;
          background-color: transparent;
        }
      }
      .icon-box {
        width: .8rem;    
        text-align: center;
        font-size: 14px;
        margin-left: .133333rem;
      }
    }
    .history,.hot-search {
      box-sizing: content-box;
      .head {
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: space-between;
        padding: .266667rem .4rem;
        background-color: #f5f8fa;
        color: #ccc;
      }
      .content {
        background-color: #fff;
        padding: .4rem .4rem .13rem .4rem;
        clear: both;
        .tag {
          display: inline-block;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          background-color: #f5f8fa;
          padding: .266667rem .4rem;
          margin: 0 .266667rem .266667rem 0;
        }
      }
    }
    .result {
      background-color: #fff;
      ul {
        li {
          padding: .3rem .4rem;
          border-bottom: 1px solid rgba(0,0,0,.1);
        }
      }
    }
  }
</style>
