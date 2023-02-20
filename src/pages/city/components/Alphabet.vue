<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handeLeetterClick">
        {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters: function () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
        // console.log(i)
        // console.log(letters)
      }
      return letters
    }
  },
  data: function () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated: function () {
    // 元素距顶部的高度
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    // e 事件对象
    handeLeetterClick: function (e) {
      // 向外触发事件, 后面跟着传递的内容
      this.$emit('change', e.target.innerText)
      console.log(e.target.innerText)
    },
    handleTouchStart: function () {
      this.touchStatus = true
      // console.log('handleTouchStart')
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // this.timer = setTimeout(function () {
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && this.letters.length) {
            this.$emit('change', this.letters[index])
            console.log(index)
          }
        }, 16)
      }
      // console.log('handleTouchMove')
    },
    handleTouchEnd: function () {
      this.touchStatus = false
      // console.log('handleTouchEnd')
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
