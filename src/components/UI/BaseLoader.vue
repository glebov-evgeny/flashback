<template>
  <div class="loader">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script>
  export default {
    name: 'BaseLoader',
  }
</script>
<style scoped lang="scss">
.loader{
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;
  span{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background-color: var(--color-coral);
    margin: 1rem .25rem;
  }
  span:nth-child(1){
    animation: bounce 1s ease-in-out infinite;
  }
  span:nth-child(2){
    animation: bounce 1s ease-in-out 0.33s infinite;
  }
  span:nth-child(3){
    animation: bounce 1s ease-in-out 0.66s infinite;
  }
}

@keyframes bounce{
  0%, 75%, 100%{
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }

  25%{
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}

</style>