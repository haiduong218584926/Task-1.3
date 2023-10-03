<template>
  <router-view/>
  <input type="text" v-model="name">
    <p>
      {{ name }}
    </p>
</template>

<script setup>
    import { ref } from "vue";
    const name = ref("")
</script>