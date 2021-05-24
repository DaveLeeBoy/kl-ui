<template>
  <a href="" :class="[`k-link-${type}`]">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'kLink',
  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style lang="scss" scoped>
.k-link-default {
  color: #606266;
}
.k-link-primary {
  color: #409eff;
}
</style>