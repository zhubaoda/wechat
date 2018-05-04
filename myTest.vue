<template>
  <div class="content">
    <scroller  lock-x scrollbar-y use-pullup ref="scroller" height="-50" >
    <div class="share-list">
      <div v-for="(item, index) in firstList" class="share">
         <span>{{item}}</span>
      </div>
    </div>
    </scroller>
  </div>
</template>
<script>
  import { Scroller } from 'vux'
  export default{
    components: {
      Scroller
    },
    data () {
      return {
        firstList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    }
  }
</script>
<style type="text/css"> 
  .content{
    height: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    padding-bottom: 50px;
    background-color: #fff;
  }
  .share {
  	height:200px;
  	width:100%;
  	border: 1px solid #ccc;
  	margin: 10px 0;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: center;
  }
</style>
