<template>
  <div class="flex flex-wrap space-x-4 bg-blue-200 mx-16">
    <div
      class="flex-initial bg-pink-200 p-2"
      v-for="(action, index) in actions"
      :key="index"
    >
      <h2 v-bind:id="`container-${index}`">
        {{ action }}
        <span v-if="index != actions.length - 1 && index != actions.length - 2"
          >,</span
        >
        <span v-if="index == actions.length - 2"> and</span>
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Actions extends Vue {
  actions: string[] = [
    "learning",
    "designing",
    "writing",
    "coding",
    "reading",
    "researching",
    "creating",
    "innovating"
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
