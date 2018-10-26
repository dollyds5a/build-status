<template>
  <div id="app">
    <div>
      <HelloWorld msg="Welcome to the Build-Status App"/>
      <el-table
    :data="tableData"
    border
    :default-sort="{prop: 'buildStatus', order: 'ascending'}"
    style="width: 100%">
     <el-table-column
      sortable
      prop="buildProvider"
      label="Build Provider"
      width="180">
    </el-table-column>
    <el-table-column
      sortable
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      sortable
      prop="updated"
      label="Updated"
      width="180">
    </el-table-column>
    <el-table-column
      sortable
      prop="created"
      label="Created">
    </el-table-column>
    <el-table-column
      sortable
      prop="buildStatus"
      label="Build Status"
      :filter-method="filterTag">
      <template slot-scope="scope">
        <el-tag
          :type="tagType(scope)"
          disable-transitions>{{scope.row.buildStatus}}</el-tag>
      </template>
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
  methods: {
    tagType({row}) {
      if (row.buildStatus === 'Pending') {
        return 'warning';
      } 
      if (row.buildStatus === 'Fail') {
        return 'danger';
      } else if (row.buildStatus === 'Pass') {
        return 'success';
      }
      return '';
    },
    filterTag(value, row) {
    return row.buildStatus === value;
    },
  },
  data() {
        return {
          tableData: [{
            buildProvider: 'AWS',
            name: 'Wham',
            updated: '2016-05-03',
            created: '2016-05-03',
            buildStatus: 'Fail'
          }, {
            buildProvider: 'AWS',
            name: 'CSI',
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
            name: 'CSI',
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
            name: 'CSI',
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
            name: 'CSI',
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
            buildProvider: 'Travis',
            name: 'CSI',
            updated: '2016-05-03',
            created: '2016-05-03',
            buildStatus: 'Pass'
          }, {
            buildProvider: 'Travis',
            name: 'CSI',
            updated: '2016-05-03',
            created: '2016-05-03',
            buildStatus: 'Pass'
          }, {
            buildProvider: 'AWS',
            name: 'CSI',
            updated: '2016-05-03',
            created: '2016-05-03',
            buildStatus: 'Fail'
          }, {
            buildProvider: 'AWS',
            name: 'CSI',
            updated: '2016-05-03',
            created: '2016-05-03',
            buildStatus: 'Pending'
          }, {
            buildProvider: 'AWS',
            name: 'Avengers',
            updated: '2016-05-03',
            created: '2016-05-03',
            buildStatus: 'Pending'
          }, {
            buildProvider: 'Travis',
            name: 'Vision',
            updated: '2016-05-03',
            created: '2016-05-03',
            buildStatus: 'Fail'
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
