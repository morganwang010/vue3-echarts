<template>
  <div id="mycharts" ref="myRef" class="chart-box" />
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, ref, onMounted } from 'vue';
import * as echarts from 'echarts';

export default defineComponent({
  name: 'echarts',
  setup() {
    const { ctx } = getCurrentInstance();
    const myRef = ref(null);
    console.log("aaa");

    const initTw = () => {
  const myChart = echarts.init(document.getElementById('mycharts'));
  console.log(myChart);
  myChart.setOption({
    title: {
      text: '本月数据统计'
    },
    tooltip: {},
    legend: {
      data: ['任务数量']
    },
    xAxis: {
      data: ['javascript', 'vue', 'ts', 'react', 'nginx']
    },
    yAxis: {},
    series: [
      {
        name: '任务数量',
        type: 'bar',
        data: [5, 20, 36, 10, 10]
      }
    ]
  });
};

onMounted(() => {
  initTw();
});
return {
  myRef
};
  }
});
</script>

<style lang="css" scoped>


img{
  width: 400px;
  height: 400px;
  background: red;
}
.chart-box{
  width: 600px;
  height: 600px;
}
</style>
