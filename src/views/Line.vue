<template>
  <v-chart class="chart" :option="option12" />
</template>

<script  lang="ts">
 

import  { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";


export default ({
  name: "HelloWorld3",
 
  provide: {
    [THEME_KEY]: "dark"
  },
  setup: () => {
    const test11 = () => {
      console.log("dddd")
    }
    test11();
    const option12 = ref({
    title: {
        text: "Traffic222 Sources",
        left: "center"
    },
    xAxis:{
        type:'category'
    },
    yAxis:{
        type:'value'
    },
    series:[{
        type:'line',
        data:[100,200,20,500,600]
    }]
    });

    return { option12 };
  },
  data() {
    return {
       option123 : {
         
      }
    }
  },
  mounted(){
    this.test();
    
    },
    
  methods: {
    test: function(){
      console.log("aaa");
    }

  }
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>