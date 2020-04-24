<template>
    <div>
        <!-- 卡片视图区 -->
        <el-card>
            <!-- 表格 -->
            <tree-table  :border="true" :show-index="true" :expand-type="false"  
              index-text="索引" :selection-type='false' 
             :data="cateList" :columns="columns">
            </tree-table>
            <!-- 分页 -->
        </el-card>
    </div>
</template>

<script>
  export default {
      data() {
          return {
              // 查询条件
              queryInfo: {
                  type:3,
                  pagenum:1,
                  pagesize:10
              },
              // 商品分类的数据列表
              cateList: [
                    {id:1, type:'食物',name:'饼干'},
                    {id:2, type:'食物2',name:'饼干2'},
                    {id:3, type:'食物3',name:'饼干3'},
                    {id:4, type:'食物4',name:'饼干4'},
              ],
              // 总数据条数
              total:0,
              // 为table指定列的定义
              columns: [
                  {
                      label: '分类',
                      prop: 'type'
                  },
                  { 
                    label: '名称',
                    prop: 'name'

                  },
                  { 
                    label: '是否有效',
                    prop: 'id'

                  }
              ]
          }
      },
      created() {
          //this.getCateList()
      },
      methods: {
          // 获取商品分类数据
          // getCateList() {
          //     this.$http.get('categories',{ params: this.queryInfo }).then( res => {
          //         console.log(res)
          //         if (res.data.meta.status !== 200) {
          //             return this.$message.error('获取用户数据失败')
          //         } else {
          //             this.cateList = res.data.data.result
          //             this.total = res.data.data.total
          //         }
          //     })
          // }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
