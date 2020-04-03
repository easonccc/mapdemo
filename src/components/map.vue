<template>
  <div id="container"></div>
</template>

<script>
export default {
  name: "map",
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      //new AMap.TileLayer.Satellite(),
      var map = new AMap.Map("container", {
        viewMode: "3D",
        pitch: 30, // 俯仰角度，默认0，[0,83]，2D地图下无效
        rotation: 25,
        zoom: 16,
        center: [121.499809, 31.236666], // 初始化地图中心点
        mapStyle: "amap://styles/macaron", // 设置地图的显示样式
        showIndoorMap: false // 是否在有矢量底图的时候自动展示室内地图，pc默认是true，移动端默认false
      });

      // 创建Object3DLayer图层
      var object3Dlayer = new AMap.Object3DLayer();
      map.add(object3Dlayer);

      // 插件加载方法。 第一个参数指定需要加载的插件类型，同时加载多个插件时，以字符串的形式添加。 在函数中进行地图插件的创建、插件事件的绑定等操作；插件为地图功能的扩展
      map.plugin(["AMap.GltfLoader"], function() {
        var urlCity =
          "https://a.amap.com/jsapi_demos/static/gltf-online/shanghai/scene.gltf";
        var urlDuck = "https://a.amap.com/jsapi_demos/static/gltf/Duck.gltf";
        var paramCity = {
          position: new AMap.LngLat(121.510909, 31.233366), // 必须
          scale: 3580, // 非必须，默认1
          height: 1800, // 非必须，默认0
          scene: 0 // 非必须，默认0
        };

        var paramDuck = {
          position: new AMap.LngLat(121.495, 31.233366), // 必须 确定地图上的一个点 第一个参数为经度，第二个参数为维度
          scale: 800, // 非必须，默认1
          height: -100, // 非必须，默认0
          scene: 0 // 非必须，默认0
        };

        var gltfObj = new AMap.GltfLoader();

        gltfObj.load(urlCity, function(gltfCity) {
          gltfCity.setOption(paramCity);
          gltfCity.rotateX(90);
          gltfCity.rotateZ(120);
          object3Dlayer.add(gltfCity);
        });

        gltfObj.load(urlDuck, function(gltfDuck) {
          gltfDuck.setOption(paramDuck);
          gltfDuck.rotateX(90);
          gltfDuck.rotateZ(-20);
          object3Dlayer.add(gltfDuck);
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
#container {
  flex: 1;
}
</style>
