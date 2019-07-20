<template>
  <div class="hello-world">
    <h1>您好在下LemonHX🍋! 您当前的路由是: {{current_route}}</h1>
    <hr />
    <h3>如果这个界面工作正常,那能证明至少我是对的🎊‍</h3>
    <h3>为什么使用Parcel和Yarn🧶呢? 因为很简单很快啊🚆!</h3>
    <h3>剩下的交给你了,好运🎉</h3>
  </div>
</template>

<script>
export default {
  name: 'hello-world',
  data:function(){
    return {
      current_route: this.$route.path.toString()
    }
  }
}
</script>
