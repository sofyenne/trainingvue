<template>
  <v-container>
    <h3>hello there is my first portlet!!</h3>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1" />
    <childoff />
  </v-container>
</template>
<script>
export default {
  name: 'First',
  data () {
    return {
      headers: [
        {
          text: 'name' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
        
        { text: 'email', value: 'email' },
        { text: 'jobtitle', value: 'jobtitle' },
        
      ],
      desserts: [
        {
          name: 'sofien',
          email: 'sof@gmail.com',
          jobtitle: 'developer'
        },
        {
          name: 'med',
          email: 'med@gmail.com',
          jobtitle: 'developer'
        }
      
      ],
    };
  },
};
</script>