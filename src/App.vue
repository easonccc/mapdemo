<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
}
body,
html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
