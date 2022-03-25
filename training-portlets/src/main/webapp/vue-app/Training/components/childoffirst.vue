<template>
<div>
    <h3>hello in child of first compenet!!!</h3>
    <v-btn color="blue" @click="open">openDrawer</v-btn>
    <exodrawer ref="refd"></exodrawer>
</div>
</template>
<script>
export default {
  name: 'Childoff',
  methods: {
    open(){
      this.$refs.refd.open();
    }
  }
};
</script>