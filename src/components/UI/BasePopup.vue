<template>
  <div class="modal" v-if="show" @click.stop="popupClose">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasePopup',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods:{
    popupClose(){
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped lang="scss">
  .modal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    backdrop-filter: blur(.5rem);
    display: flex;
    align-items: center;
    &__content{
      margin: 0 auto;
      background: var(--color-white);
      border-radius: 1rem;
      min-width: 30rem;
      padding: 2rem;
    }
  }
</style>