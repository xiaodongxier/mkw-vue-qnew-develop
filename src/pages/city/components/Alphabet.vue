<template>
  <ul class="list">
    <li class="item"
        v-for="(item, key) of cities"
        :key="key"
        @click="handeLeetterClick">
        {{ key }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  methods: {
    // e 事件对象
    handeLeetterClick: function (e) {
      // 向外触发事件, 后面跟着传递的内容
      this.$emit('change', e.target.innerText)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.list
  position absolute
  right 0
  top: 1.5rem
  bottom: 0
  width .4rem
  display: flex
  flex-direction: column
  justify-content: center
  .item
    text-align: center
    line-height: .4rem
    color: $bgColor
</style>
