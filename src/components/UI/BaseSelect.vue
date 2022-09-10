<template>
  <select
      class="select"
      v-model="modelValue"
      @change="changeOption"
  >
    <option disabled value="">Выбрать из списка:</option>
    <option
        v-for="option in options"
        :value="option.value"
        :key="option.value">{{option.name}}</option>
  </select>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods:{
    changeOption(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
.select{
  width: 100%;
  min-height: 4rem;
  border-radius: .5rem;
  font-size: 1.6rem;
}
</style>