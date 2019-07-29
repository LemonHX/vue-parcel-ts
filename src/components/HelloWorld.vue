<template>
  <div id="back">
    <div class="hello-world card animated fadeInLeft">
      <h1 class="animated pulse">您好在下LemonHX🍋! 您当前的路由是: {{current_route}}</h1>
      <hr />
      <h3>如果这个界面工作正常,那能证明至少我是对的🎊‍</h3>
      <h3>为什么使用Parcel和Yarn🧶呢? 因为很简单很快啊🚆!</h3>
      <h3>刚刚添加了Typescrip和vuex的支持!变得更加严格了呢!❄️</h3>
      <h3>寒寒⛄推荐的Buefy真的挺漂亮的 🌸</h3>
      <div class="block">
            <b-icon
                icon="account"
                size="is-small"
                type="is-success">
            </b-icon>
            <b-icon
                icon="home"
                size="is-middle"
                type="is-info">
            </b-icon>
            <b-icon
                icon="view-dashboard"
                size="is-large"
                type="is-primary">
            </b-icon>
        </div>
        <h3>没错,新增了对mdi的图标支持</h3>
              <hr />
      <b-collapse class="card animated rollIn" aria-id="contentIdForA11y3" style="margin:10%;">
        <div slot="trigger" class="card-header" role="button" aria-controls="contentIdForA11y3">
          <p class="card-header-title">Vuex计数器!</p>
          <a class="card-header-icon">
            <i class="fas fa-caret-down"></i>
          </a>
        </div>
        <div class="card-content">
          <div class="content">
            <h3>当前计数: {{ count }}</h3>
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item">🙃</a>
          <a class="card-footer-item" @click="increment">➕</a>
          <a class="card-footer-item" @click="decrement">➖</a>
        </footer>
      </b-collapse>
      <hr />
      <h3>剩下的交给你了,好运🎉</h3>
    </div>
  </div>
</template>

<script lang="ts">
import store from "../storage/HelloStore";
export default {
  name: "hello-world",
  computed: {
    count() {
      return store.state.count;
    }
  },
  data(): object {
    return {
      current_route: this.$route.path.toString(),
    };
  },
  methods: {
    increment() {
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    },
  }
};
</script>

<style lang="sass" scoped>
.hello-world
  background-color: white
  width: 90%
  margin-left: 5%
  margin-right: 5%
  padding: 1em

#back
  height: 100%
  width: 100%

h1
  font-size: 3em
  font-weight: bold
  animation-delay: 0.7s

h3
  font-size: 1.2em
  font-weight: bold
.rollIn
  animation-delay: 1s
</style>
