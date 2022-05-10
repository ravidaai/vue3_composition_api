<template>
  <div class="home">
    <HelloWorld msg="Composition API - Reactive" />
    <h1>Refs</h1>
    <hr />
    <p>{{ PersonOne.name }} - {{ PersonOne.age }}</p>
    <button @click="updatePersonOne">Update Person One</button>

    <h1>Reactive</h1>
    <hr />
    <p>{{ PersonTwo.name }} - {{ PersonTwo.age }} - {{personTwoName}}</p>
    <button @click="updatePersonTwo">Update Person Two</button>

    <h1>Computed</h1>
    <hr />
    <p>Name: {{nameComputed}}</p>
<p>
    <input type="text" v-model="search" placeholder="Search fruits..."><br>
    <span>Search term : {{search}}</span>

     <ul>
      <li v-for="fruit in matchingFruits" :key="fruit">{{fruit}}</li>
    </ul>

    <h2>Computed Loop</h2>
    <ul>
      <li v-for="fruit in fruitsComputedRef" :key="fruit">{{fruit}}</li>
    </ul>
    </p>


    <h2>Stop Watch Effect</h2>
    <button @click="handleWatch">Stop Watch Effect</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { ref, reactive } from "@vue/reactivity";
import { computed, watch, watchEffect } from "@vue/runtime-core";

export default {
  name: "ReactiveView",
  components: {
    HelloWorld,
  },
  //you can create any values , any javascript functions inside setup
  setup() {
    console.log("setup");
    const PersonOne = ref({ name: "Jhon", age: 30 });
    const PersonTwo = reactive({ name: "Dimitry", age: 35 });

    const personOneName = ref("Jhon"); //Reactive value for this string
    const personTwoName = reactive("Dimitry"); //its not reactive value because its primitive type and can not update

    //For computed
    const search = ref("");
    const fruitsComputedRef = ref([
      "Mango",
      "Banana",
      "Apple",
      "Jerry",
      "Coconut",
    ]);

    //can create function here
    const updatePersonOne = () => {
      PersonOne.value.age = 40;
    };

    const updatePersonTwo = () => {
      //when using reactive we dont need to use value properties like ref which is major difference
      PersonTwo.age = 45;
      //personTwoName = 'Cena'
    };

    //Computed
    const nameComputed = computed(() => {
      return "Denney";
    });

    const matchingFruits = computed(() => {
      return fruitsComputedRef.value.filter((fruit) =>
        fruit.includes(search.value)
      );
    });

    //Watch Hook
    const stopWatch = watch(search, () => {
      console.log("watch ran");
    });

    const stopWatchEffect = watchEffect(() => {
      console.log("watch effect ran", search.value);
    });

    const handleWatch = () => {
      stopWatch();
      stopWatchEffect();
    };

    return {
      handleWatch,
      matchingFruits,
      search,
      fruitsComputedRef,
      nameComputed,
      PersonOne,
      PersonTwo,
      updatePersonOne,
      updatePersonTwo,
      personTwoName,
    };
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
