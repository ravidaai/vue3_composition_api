import { ref } from "@vue/reactivity";
const getPosts = () => {
  const posts = ref([]);

  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/blogs");
      if (!data.ok) {
        throw Error("No data available.");
      }

      posts.value = await data.json();

      //console.log(data);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  const showPosts = ref(true);
  //load();

  return { posts, showPosts, error, load };
};

export default getPosts
