<template>
  <div class="home">
    <HelloWorld msg="Composition API" />
    <p ref="p">My name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
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

    const p = ref(null);
    console.log(p, p.value); //here p.value return null since assigned tag not rendered initially

    //can assign variable
    let name = "Jhon Doe";
    let age = 30;

    //can create function here
    const handleClick = () => {
      //console.log("This is click event");
      // console.log(p, p.value);
      // p.value.classList.add("intro");
      // p.value.textContent = "This is updated paragraph";


    };

    //This is not reactive value but we can make it reactive
    return { name: name, age: age, handleClick, p };
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
