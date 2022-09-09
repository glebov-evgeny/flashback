<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
}
</script>
<style scoped lang="scss">
.button{
  cursor: pointer;
  min-height: 4rem;
  background: var(--color-gray-dark);
  color: var(--color-white);
  font-size: 1.4rem;
  border: none;
  outline: none;
  border-radius: .5rem;
  padding: 0 2rem;
}
</style>