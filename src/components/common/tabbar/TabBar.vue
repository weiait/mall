<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style>
#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(125,125,125,.2);

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
