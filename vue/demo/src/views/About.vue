<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ msg }}</h2>
    <h2>{{ num }}</h2>
    <button @click="add">Button</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "HelloWorld",
      num: 100,
    }
  },
  methods: {
    add() {
      this.num += 1;
    },
  },
}
</script>

<style>
</style>