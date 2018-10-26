<template>
  <div id="app">
    <div>
      <HelloWorld msg="Welcome to the Build-Status App"/>
      <el-table
    :data="tableData"
    border
    style="width: 100%">
     <el-table-column
      prop="buildProvider"
      label="Build Provider"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="updated"
      label="Updated"
      width="180">
    </el-table-column>
    <el-table-column
      prop="created"
      label="Created">
    </el-table-column>
    <el-table-column
      prop="buildStatus"
      label="Build Status">
    </el-table-column>
  </el-table>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
        return {
          tableData: [{
            buildProvider: 'AWS',
            name: 'Wham',
            updated: '2016-05-03',
            created: '2016-05-03',
            buildStatus: 'Pass'
          }, {
            buildProvider: 'AWS',
            name: 'CSI',
            updated: '2016-05-03',
            created: '2016-05-03',
            buildStatus: 'Pass'
          }, {
            buildProvider: 'AWS',
            name: 'Avengers',
            updated: '2016-05-03',
            created: '2016-05-03',
            buildStatus: 'Pass'
          }, {
            buildProvider: 'AWS',
            name: 'Vision',
            updated: '2016-05-03',
            created: '2016-05-03',
            buildStatus: 'Pass'
          }]
        }
      }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
