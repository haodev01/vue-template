<template>
  <div>
    <button @click="onPushNotFound">Push NotFound</button>
    <h1 class="text-red-500">Home Page</h1>
    <router-link :to="{ name: 'products' }">Products</router-link>
    <h3>{{ count }}</h3>
    <button @click="increment">Button</button>
    <ul>
      <li v-for="item in listUser" :key="item.id">
        <router-link :to="{ name: 'user-detail', params: { id: item.id } }">
          {{ item.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      listUser: [
        { id: 1, name: "Hào" },
        { id: 2, name: "Tùng" },
        { id: 3, name: "Trí" },
      ],
    };
  },
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters({
      count: "count",
    }),
  },
  methods: {
    ...mapActions({
      increment: "increment",
    }),
    onPushNotFound() {
      this.$router.push({
        name: "NotFound",
        // preserve current path and remove the first char to avoid the target URL starting with `//`
        params: { pathMatch: this.$route.path.substring(1).split("/") },
        // preserve existing query and hash if any
        query: this.$route.query,
        hash: this.$route.hash,
      });
    },
  },
  mounted() {
    console.log(this.isLoading);
  },
};
</script>
