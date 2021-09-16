<template>
  <div>
    <div v-if="cartlist.length <= 0">购物车为空,<a href="#">去购物</a></div>
    <table v-else>
      <caption>
        <h1>购物车</h1>
      </caption>
      <tr>
        <th></th>
        <th>编号</th>
        <th>商品名称</th>
        <th>商品价格</th>
        <th>购买数量</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item, index) in cartlist" :key="item.id">
        <td><input type="checkbox" v-model="item.check" /></td>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>${{ item.price.toFixed(2) }}</td>
        <td>
          <button @click="item.count--" :disabled="item.count <= 1">-</button>
          {{ item.count }}
          <button @click="item.count++">+</button>
        </td>
        <!-- <td><button @click="del()">删除</button></td> -->
        <td><a href="#" @click.prevent="del(index)">删除</a></td>
      </tr>
      <tr>
        <td colspan="3">总价</td>
        <td colspan="3">{{ totalPrice }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  //数据
  data() {
    return {
      cartlist: [
        { id: 1, check: true, name: '细说Go', price: 10, count: 1 },
        { id: 2, check: true, name: '细说Php', price: 10, count: 1 },
        { id: 3, check: true, name: '细说Vue', price: 10, count: 1 },
        { id: 4, check: true, name: '细说Java', price: 10, count: 1 },
        { id: 5, check: false, name: '细说Python', price: 10, count: 1 },
      ]
    }
  },
  //计算属性
  computed: {
    totalPrice: {
      get() {
        let sum = 0;
        for (let book of this.cartlist) {
          if (book.check) {
            sum += book.price * book.count;
          }
        }
        return '$' + sum;
      }
    }
  },
  //方法
  methods: {
    del(index) {
      console.log(index);
      this.cartlist.splice(index, 1);
    }
  },
}
</script>

<style scoped>
table {
  width: 600px;
  border: 1px solid #888888;
  border-collapse: collapse;
}
th {
  background: #ccc;
}
td,
th {
  border: 1px solid #888888;
  padding: 10px;
}
</style>