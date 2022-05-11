<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";
export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    console.log(props.posts);
    onMounted(() => {
      console.log("Mounted");
    });
    onUnmounted(() => {
      console.log("OnUnmounted");
    }),
      onUpdated(() => {
        console.log("OnUpdated");
      });
  },
  mounted() {
    console.log("Mounted using options api");
  },
};
</script>

<style>
</style>