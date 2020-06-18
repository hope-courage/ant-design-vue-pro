<template>
  <div>
    <a-drawer
      title="自定义风格"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      width="300px"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon type="setting"></a-icon>
        </div>
      </template>
      <div>
        <template>
          <div>
            <h2>整体风格定制</h2>

            <!-- 此处添加该属性会出现渲染错误，原因是初始渲染是router中并没有query属性，
                 三层表达式的第二层没有该属性，去获取第三层时报错，
                 不清楚为何演示代码没有问题，此处会报错，
                 当前整个配置功能是失效的
                 下方是同样的错误 -->
            <!-- :value="this.$router.query.navTheme || 'dark'" -->
            <a-radio-group
              @change="e => handlerSettingChange('navTheme', e.target.value)"
            >
              <a-radio value="dark"> 黑色 </a-radio>
              <a-radio value="light"> 白色 </a-radio>
            </a-radio-group>
            <h2>导航模式</h2>
            <a-radio-group
              @change="e => handlerSettingChange('navLayout', e.target.value)"
            >
              <a-radio value="left"> 左侧 </a-radio>
              <a-radio value="right"> 顶部 </a-radio>
            </a-radio-group>
          </div>
        </template>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      navLayout: this.$router.query.navLayout
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },
    handlerSettingChange(type, value) {
      // 将配置信息同步到路由的query中
      this.$router.push({ query: { ...this.$router.query, [type]: value } });
    }
  }
};
</script>

<style scoped>
.handle {
  position: absolute;
  top: 240px;
  right: 300px;
  width: 48px;
  height: 48px;
  background: #1890ff;
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 48px;
  border-radius: 3px 0 0 3px;
}
</style>
