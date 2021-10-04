<template>
  <aside class="blogger-wrapper card-box">
    <div class="avatar">
      <img
        :src="blogger.avatar"
        alt="头像"
        title="我好看吗"
        @load="img2svg"
        ref="avatarRef"
      />
    </div>
    <div class="icons" v-if="social && social.icons && social.icons.length">
      <a
        v-for="(item, index) in social.icons"
        :key="index"
        :href="item.link"
        :title="item.title"
        :class="['iconfont', item.iconClass]"
        :style="{ width: 100 / social.icons.length + '%' }"
        target="_blank"
      />
    </div>
    <div class="blogger">
      <span class="name">{{ blogger.name }}</span>
      <span class="slogan">{{ blogger.slogan }}</span>
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    blogger() {
      return this.$themeConfig.blogger;
    },
    social() {
      return this.$themeConfig.social;
    },
  },
  methods: {
    img2svg() {
      const vm = this;
      if (vm.blogger.avatar && ~vm.blogger.avatar.indexOf('.svg')) {
        const req = new XMLHttpRequest();
        const img = vm.$refs.avatarRef;
        req.onload = e => {
          const t = document.createElement('div');
          t.innerHTML = req.responseXML.documentElement.outerHTML;
          img.parentElement.insertBefore(t.firstElementChild, img);
          img.remove();
        };
        req.open('get', img.src);
        req.send();
      }
    },
  },
};
</script>

<style lang="stylus">
.blogger-wrapper
  height auto
  display inline-table
  padding-top 0 !important
  overflow hidden
  .avatar
    width 100%
    // height 235px
    display flex;
    justify-content center;
    align-items center;
    overflow hidden
    padding 10px
    box-sizing border-box
    @media (max-width 900px)
      // width 205px
      // height 205px
    img
      width 100%
      height 100%
    svg
      width 60%
      height 60%
  .icons
    // border 1px solid var(--borderColor)
    border-top none
    height 35px
    line-height 35px
    a
      font-size 20px
      width 33%
      color var(--textColor)
      display block
      float left
      text-align center
      opacity 0.8
      &:hover
        color $accentColor
  .blogger
    padding 0.3rem 0.95rem 0 0.95rem
    .name
      font-size 1.3rem
      display block
      margin-bottom 6px
    .slogan
      color var(--textColor)
</style>
