import { ref } from "vue"

const getPost=(id)=>{
  const post = ref();

  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/blogs/"+id);
      if (!data.ok) {
        throw Error("Post doesnot exist.");
      }

      post.value = await data.json();

      //console.log(data);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  const showPosts = ref(true);
  //load();

  return { post, error, load };
}

export default getPost