<template>
  <div id="mainframe">
    <nav class="navbar docs-navbar is-spaced is-shaded card">
      <div class="container">
        <div class="navbar-brand">
          <a href="/" class="navbar-item is-active" title="Created By LemonHX">
            <img src="https://lemonhx.github.io/images/me.png" alt="Author" />
          </a>
          <a href="https://github.com/lemonhx" title="Github" class="navbar-item has-text-dark">
            <span class="icon">
              <i class="fab fa-github"></i>
            </span>
          </a>
          <a
            href="https://www.zhihu.com/people/ning-meng-wan-xiong-99/activities"
            title="Zhihu"
            class="navbar-item has-text-zhihu"
          >
            <span class="icon">
              <i class="fab fa-zhihu"></i>
            </span>
          </a>
          <a href="https://twitter.com/runzhe2001" title="QQ" class="navbar-item has-text-QQ">
            <span class="icon">
              <i class="fab fa-qq"></i>
            </span>
          </a>
          <span class="navbar-burger burger">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <a href="/" class="navbar-item" id="r0">主页</a>
            <a href="/ru1" class="navbar-item" id="ru1">路由1</a>
            <a href="/ru2" class="navbar-item" id="ru2">路由2</a>
            <a href="/ru3" class="navbar-item" id="ru3">路由3</a>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
  mounted() {
    let cp = this.$route.path;
    if (cp == "/") {
      document.getElementById("r0")!.classList.add("button");
      document.getElementById("r0")!.classList.add("is-link");
    } else {
      document.getElementById(cp.split("/")[1])!.classList.add("button");
      document.getElementById(cp.split("/")[1])!.classList.add("is-link");
    }
  }
};
</script>

<style lang="sass" scoped>
#navbar
  width: 100%
#mainframe
  height: 100%
i
  font-size: 1.2em
</style>
