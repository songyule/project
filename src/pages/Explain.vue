<template>
  <div style="font-family: fantasy;">
    <h4 style="font-size:18px;text-align:center;margin:10px 0;font-weight:bold;">这是一个注释啊</h4>
    <div style="width:100%;overflow:hidden;">*****************************************************************************************************</div>
    <div style="color:blue;margin-bottom:5px;">配置rem</div>
    <p>
      1 : 需要文件 flexible.js</br>
      2 : 在webpack.base.conf.js的入口里面引入flexible.js文件</br>
      3 : vue-loader.conf.js里面写入
      <pre style="font-family: cursive;">
      postcss: [
        require('postcss-bem')(),
        require('postcss-nested')(),
        require('postcss-px2rem')({remUnit: 37.5}),
        require('autoprefixer')({
          browsers: [
            'last 3 versions',
            'ie >= 9',
            'ie_mob >= 10',
            'ff >= 30',
            'chrome >= 34',
            'safari >= 6',
            'opera >= 12.1',
            'ios >= 6',
            'android >= 4.4',
            'bb >= 10',
            'and_uc >= 9.9'
          ]
        })
      ]
      </pre></br>
      4 : 重新启动。over
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
