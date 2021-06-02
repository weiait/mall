<template>
  <div class="home-recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .home-recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0px 25px;
    border-bottom: 10px solid #f6f6f6;
  }
  .recommend-item{
    flex: 1;
    width: 25%;
  }
  .recommend-item img{
    width: 80%;
  }
</style>
