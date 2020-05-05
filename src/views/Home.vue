<template>
  <div class="flex flex-col px-32">
    <div class="text-gray-700 px-4 py-2 m-2">
      <Header payload="Christine Nguyen is ..." />
    </div>
    <div class="text-gray-700 content-center bg-gray-400 p-16 mx-64 my-2">
      <Actions payload="Actions component" />
    </div>
    <div class="text-gray-700 px-4 py-2 m-2">
      <Header payload="in Phoenix, Arizona." />
      <router-link
        class="bg-blue-200 text-gray-500 p-2 mr-24 float-right"
        to="/about"
        >+ more about me?</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/home/Header.vue";
import Actions from "@/components/home/Actions.vue";

@Component({
  components: {
    Header,
    Actions
  }
})
export default class Home extends Vue {}
</script>
