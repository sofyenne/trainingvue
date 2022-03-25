<template>
  <exo-drawer
    id="activityKudosDrawer"
    ref="testDrawer"
    width="600px"
    hide-actions
    right
    disable-pull-to-refresh>
    <template slot="title">
      <span class="text-header-title">hello in drawer title</span>
    </template>
    <template slot="content">
      <span class="text-content">content drawer </span>
    </template>
    <template slot="footer">
      <span>footer exo-drawer</span>
    </template>
  </exo-drawer>
</template>
<script>
export default {
  name: 'test',
  methods: {
    open(){
      this.$refs.testDrawer.drawer=true;
    }
  }
};
</script>