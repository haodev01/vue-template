<script>
export default {
  methods: {
    handlePush() {
      this.$router.push({
        path: "/about",
      });
    },
  },
};
</script>

<template>
  <div>
    <button @click="handlePush">Push</button>
  </div>
</template>
