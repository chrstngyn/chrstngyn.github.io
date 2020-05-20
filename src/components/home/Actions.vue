<template>
  <div class="flex flex-wrap content-start space-x-2">
    <div
      class="flex-initial p-2"
      v-for="(action, index) in actions"
      :key="index"
    >
      <h2 :id="`container-${index}`">
        <span v-if="index !== actions.length - 1">
          {{ action.concat(",") }}
        </span>
        <span v-if="index === actions.length - 1">and {{ action }}</span>
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
    "researching",
    "designing",
    "writing",
    "coding",
    "reading",
    "creating",
    "innovating"
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
