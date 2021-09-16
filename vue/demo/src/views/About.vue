<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div :class="{ box: isShow }" v-on:click="show()">box</div>

    <h2>{{ msg }}</h2>
    <h2>{{ num1 }}</h2>
    <h2 v-once>v-once:{{ num1 }}</h2>
    <button @click="add">Button</button>

    <h2>测试计算属性与方法的差异,console.log</h2>
    <h2>{{ getAdd() }}</h2>
    <h2>{{ getAdd() }}</h2>
    <h2>{{ sub }}</h2>
    <h2>{{ sub }}</h2>
    <h2>totalPrice={{ totalPrice }}</h2>
  </div>
</template>

<script>
export default {
  // 数据
  data() {
    return {
      msg: "HelloWorld",
      num1: 101,
      num2: 102,
      box: 'box',
      isShow: true,
      books: [
        { id: 1, name: "<111>", price: 30 },
        { id: 2, name: "<222>", price: 30 },
        { id: 3, name: "<333>", price: 30 },
        { id: 4, name: "<444>", price: 30 },
      ],
    }
  },
  // 计算属性
  computed: {
    // 计算属性只会调用一次
    sub: {
      get() {
        console.log("计算属性sub被调用了");
        return this.num1 + this.num2;
      },
    },
    totalPrice: {
      get() {
        return this.books.reduce((s, n) => { return s + n.price }, 0)
      },
    }
  },
  // 方法
  methods: {
    add() {
      this.num1 += 1;
    },
    getAdd() {
      // 方法被调用几次执行几次
      console.log("getAdd被调用了");
      return this.num1 + this.num2;
    },
    show() {
      this.isShow = !this.isShow;
    }
  },
}
</script>

<style>
.box {
  background-color: cadetblue;
  width: 100px;
  height: 100px;
}
</style>