<template>
  <div id="all">
    <tree :model="root" :length="length"></tree>
  </div>
</template>
<style scoped>
  #all{
    width:100%;
    height: 100%;
  }
 
</style>
<script>
  import tree from '@/components/tree.vue'
  export default{
    data(){
      return{
        root:{
          name:"根节点",
          level:0,
          isOpen:true,
          children:[
            {
              name:"节点1",
              level:1,
              url:"/homePage/middle/navLeftFirst",
              isOpen:false,
              children:[
                {
                  name:"节点1-1",
                  level:2,
                  isOpen:true,
                  children:[]
                },
                {
                  name:"节点1-2",
                  level:2,
                  isOpen:true,
                  children:[]
                }
              ]
            },
            {
              name:"节点2",
              level:1,
              url:"/homePage/middle/navLeftSecond",
              isOpen:false,
              children:[
                {
                  name:"节点2-1",
                  level:2,
                  isOpen:true,
                  children:[]
                },
                {
                  name:"节点2-2",
                  level:2,
                  isOpen:true,
                  children:[]
                }
              ]
 
            }
          ]
        },
        length:2
      }
    },
    components:{
      tree
    }
  }
</script>