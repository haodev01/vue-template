<template>
  <component :is="$route.meta.layout">
    <RouterView />
  </component>
</template>
<script>
import { RouterView } from "vue-router";
export default {};
</script>
