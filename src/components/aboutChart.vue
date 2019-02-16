<script>
// CommitChart.js
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  mounted () {
    this.renderChart({
      labels: ['Problem Solving', 'Creativity', 'Communication', 'Passion'],
      datasets: [
        {
          label: 'Skills',
          backgroundColor: ['i 	#282828','#808080','#B0B0B0','#F5F5F5'],
          data: [40, 20, 11, 29],
        }
      ]
    })
  }
}
</script>

<style scoped>
body {
    background-color: #efefef;
}
</style>
