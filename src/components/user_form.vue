<template>
  <div>
    user {{ value.firstName }} {{ value.lastName }}

    <input type="text" v-model="value.firstName">

    <pre>{{ value }}</pre>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>
