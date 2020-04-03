<template>
  <div class="box">
    <div id="container"></div>
  </div>
</template>

<script>
import AMap from "AMap"; // 引入高德地图
export default {
  name: "mymap",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let map = new AMap.Map("container", {
        center: [116.397428, 39.90923],
        resizeEnable: true,
        zoom: 10
      });
    }
  }
};
</script>
<style lang="less">
.box {
  flex: 1;
  display: flex !important;
  flex-direction: row;
  flex-wrap: wrap;
  #container {
    flex: 1;
  }
}
</style>
