<template>
  <v-chart class="chart" :option="option12" />
</template>

<script lang="ts">
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, defineComponent, onMounted } from 'vue'
import * as echarts from 'echarts'
import axios from 'axios'

export default {
  name: 'HelloWorld3',
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: 'dark'
  },
  setup: () => {
    var _rawData = null
    var option12 = ref({})
    onMounted(async () => {
      const res = await axios(
        'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/life-expectancy-table.json'
      ).then((response) => {
        _rawData = response.data
      })
      const countries = [
        'Finland',
        'France',
        'Germany',
        'Iceland',
        'Norway',
        'Poland',
        'Russia',
        'United Kingdom'
      ]
      const datasetWithFilters: echarts.DatasetComponentOption[] = []
      const seriesList: echarts.SeriesOption[] = []
      echarts.util.each(countries, function (country) {
        var datasetId = 'dataset_' + country
        datasetWithFilters.push({
          id: datasetId,
          fromDatasetId: 'dataset_raw',
          transform: {
            type: 'filter',
            config: {
              and: [
                { dimension: 'Year', gte: 1950 },
                { dimension: 'Country', '=': country }
              ]
            }
          }
        })
        seriesList.push({
          type: 'line',
          datasetId: datasetId,
          showSymbol: false,
          name: country,
          endLabel: {
            show: true,
            formatter: function (params: any) {
              return params.value[3] + ': ' + params.value[0]
            }
          },
          labelLayout: {
            moveOverlap: 'shiftY'
          },
          emphasis: {
            focus: 'series'
          },
          encode: {
            x: 'Year',
            y: 'Income',
            label: ['Country', 'Income'],
            itemName: 'Year',
            tooltip: ['Income']
          }
        })
      })
      option12.value = {
        animationDuration: 10000,
        dataset: [
          {
            id: 'dataset_raw',
            source: _rawData
          },
          ...datasetWithFilters
        ],
        title: {
          text: 'Income of Germany and France since 1950'
        },
        tooltip: {
          order: 'valueDesc',
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          nameLocation: 'middle'
        },
        yAxis: {
          name: 'Income'
        },
        grid: {
          right: 140
        },
        series: seriesList
      }
    })
    console.log(option12)
    return { option12 }
  }
}
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>