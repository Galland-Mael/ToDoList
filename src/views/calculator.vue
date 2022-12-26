<template>
  <div class="title">Calculator</div>
  <calculatorComponent/>
</template>

<script>
import calculatorComponent from '@/components/calculatorComponent'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'calculator',
  components: {
    calculatorComponent
  }
}
</script>

<style scoped>
.title{
  font-size: 1.5em;
}
</style>
