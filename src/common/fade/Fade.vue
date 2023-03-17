<template>
  <div>
    <transition>
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DetailFade'
}
</script>

<style lang="stylus" scoped>
.v-enter, .v-leave-to
  opacity: 0;
.v-enter-active, .v-leave-active
  transition: 1s
  // opacity 1
</style>
