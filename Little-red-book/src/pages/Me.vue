<template>
  <div id="me">
    <h1>关于我</h1>
    <p>hi! 欢迎查看我的项目</p>
    <p>本人应届毕业生，爱好编程，这个项目由我独立完成</p>
    <p>自学前端，感觉所见即所得是非常棒的编程体验</p>
    <p>比较注重基础，所以对js的学习要求比较高</p>
    <p>我的目标是通过工作中的学习努力向成为全栈工程师迈进，下方是我的简历</p>
    <p>如果对我的技术能力有意，欢迎联系我，^_^</p>
    <p>我的简历地址：<a href="http://sevenlove.site/resume.pdf">戳这里</a></p>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$store.commit('change_header_right_icon', '')
    }
  }

</script>

<style lang="scss">
  #me {
    padding: 20px;
    font-size: 16px;
    line-height: 2;
    h1 {
      text-align: center;
    }
    a {
      color: #000;
    }
  }
</style>