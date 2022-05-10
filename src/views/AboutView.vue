<template>
  <div class="home">
    <HelloWorld msg="Composition API - Refs" />
    <p>My name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>

    <p>
     
      <input type="text" v-model="name" />
    </p>

    <p>
      <button @click="age++">Add 1 to age</button>

    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  //you can create any values , any javascript functions inside setup
  setup() {
    console.log("setup");

    // const p = ref(null);

    //These are reactive values
    const name = ref("Jhon Doe");
    const age = ref(30);

    //can create function here
    const handleClick = () => {
      name.value = "Demitry";
      age.value = 34;
    };

    return { name, age, handleClick };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },

  //Values inside data function is reactive value
  // data(){
  //   return {
  //     age:40
  //   }
  // }
};
</script>
