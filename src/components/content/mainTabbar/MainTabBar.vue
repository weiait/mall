<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/home.svg" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/home_active.svg" />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/category.svg" slot="item-icon" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active" />
      </template>
      <template v-slot:item-text>
        <div slot="item-text">分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/shopcart.svg" slot="item-icon" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-icon-active" />
      </template>
      <template v-slot:item-text>
        <div slot="item-text">购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/profile.svg" slot="item-icon" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-active" />
      </template>
      <template v-slot:item-text>
        <div slot="item-text">我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
