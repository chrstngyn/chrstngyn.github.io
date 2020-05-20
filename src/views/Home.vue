<template>
  <div class="flex flex-col">
    <!-- top text -->
    <div class="flex flex-row items-center">
      <Header
        class="text-gray-700 px-4 py-2 m-2"
        payload="Christine Nguyen is ..."
      />
      <div class="flex-shrink y-divider bg-gray-800 w-2/3"></div>
    </div>

    <!-- list of actions -->
    <div class="text-gray-700 mx-auto p-10 w-2/3">
      <Actions payload="Actions component" />
    </div>

    <!-- bottom text -->
    <div class="flex flex-row items-center">
      <div class="flex-shrink y-divider bg-gray-800 w-2/3 ml-auto"></div>
      <Header
        class="text-gray-700 px-4 py-2 m-2"
        payload="in Phoenix, Arizona."
      />
    </div>

    <!-- go to about -->
    <router-link class="text-gray-500 px-2 pb-4 ml-auto mr-24" to="/about"
      >++ more about me?</router-link
    >
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
