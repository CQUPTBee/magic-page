<template>
  <div class="wrap">
    <div class="container">
      <top-header></top-header>
      <list></list>
      <!-- <div 
        v-for="(item,index) in componentList"
        :is="item.name"
        ></div> -->
    </div>
  </div>
</template>

<script>
import modules from '../components/modules'
import { mapActions } from 'vuex'

export default {
  name: 'index',
  data () {
    return {
      componentList: []
    }
  },

  created () {
    this.show()
  },

  methods: {
    ...mapActions([
      'setComponents'
    ]),
    show () {
      // 请求接口

      // 修改组件列表
      this.setComponents({
        name: name
      })
      this.componentList = this.$store.state.pageData.preComponentList
      console.log('console-name:', this.componentList)
    }
  },

  components: {
    ...modules
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.container {
  width: 750px;
  p {
    font-size: 20px;
    width: 50px;
  }
  // overflow-y: scroll;
  // &::-webkit-scrollbar {
  //   width: 5px;
  //   height: 5px;
  //   box-sizing: border-box;
  // }
  // &::-webkit-scrollbar-thumb {
  //   background-color: #e7e7e7;
  //   border: 1px solid rgba(0, 0, 0, 0.1);
  //   -webkit-border-radius: 5px;
  // }
  
  // 悬浮时
  
  // &::-webkit-scrollbar-thumb:hover {
  //   background-color: #f6f6f6;
  //   border: 1px solid rgba(0, 0, 0, 0.1);
  // }
  // /*
  // 滚动条空白处的样式
  // */
  // &::-webkit-scrollbar-track-piece {
  //   background-color: rgba(0, 0, 0, 0.05);
  //   -webkit-border-radius: 5px;
  // }
}
</style>
