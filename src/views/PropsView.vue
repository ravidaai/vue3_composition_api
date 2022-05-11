<template>
  <div class="home">
    <HelloWorld msg="Composition API - Props" />

    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" v-if="showPosts"></PostList>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>

    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete a Posts</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import getPosts from "../composables/getPosts";
import PostList from "../components/PostList.vue";

export default {
  name: "PropsView",
  components: {
    HelloWorld,
    PostList,
  },

  setup() {
    const { posts, showPosts, error, load } = getPosts();
    load()
    return { posts, showPosts, error };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },

};
</script>
