<template> 
  <div ref="test" style="width:800px;height:600px;"></div>
</template>

<script lang="ts">
import * as echart from 'echarts'
import {ref,onMounted } from 'vue'
export default {

  name: 'Echart1',
  setup(){
        let test=ref(null);//获取div元素，这里与vue2.x的写法不一样了
        let myChart=null;

        function pie(){
            myChart.setOption({
                 title:{
                     text:"这是一个饼图！",
                     textStyle:{
                        color:"red",
                        fontStyle:"oblique",
                     },
                 },
                 series:{
                     type:'pie',
                      data:[
                           {
                             name:"pie1",
                             value:200
                           },
                           {
                              name:"pie2",
                              value:210
                           },
                           {
                              name:"pie3",
                              value:150
                           },
                           {
                              name:"pie4",
                              value:20
                           },
                           {
                              name:"pie5",
                              value:50
                           },
                           {
                              name:"pie6",
                              value:100
                           }
                           ]
                 }

            })
        }


        onMounted(()=>{
             myChart=echart.init(test.value);
             pie()
        })


        return {
            test//test变量必须要写，如果没写，就拿不到div元素
        }
  },

}
</script>