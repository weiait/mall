<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";

import {getHomeMultiData} from "network/home";


export default {
  name: "Home",
  components: {
    HomeRecommend,
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultiData().then(res => {
      // this.banners = res
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style>
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;
    box-shadow: 0 1px 1px rgba(125,125,125,.2);
  }
</style>
