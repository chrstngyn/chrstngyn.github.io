<template>
  <div class="flex flex-wrap content-start space-x-2">
    <div
      class="flex-initial p-2"
      v-for="(action, index) in actions"
      :key="index"
    >
      <h1 :id="`action-${index}`">
        <span v-if="index === 0" class="grow">
          <span> {{ action }}</span>

          <span>
            on various projects,
          </span>
        </span>
        <span v-else-if="index === 2">
          {{ action }}
          <span class="grow">
            about different css frameworks,
          </span>
        </span>
        <span v-else-if="index === 4">
          {{ action }}
          <span class="grow">
            about tech on medium,
          </span>
        </span>
        <span v-else-if="index !== actions.length - 1">
          {{ action.concat(",") }}
        </span>
      </h1>
      <h1 v-if="index === actions.length - 1">and {{ action }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Actions extends Vue {
  actions: string[] = [
    "coding",
    "designing",
    "learning",
    "researching",
    "writing",
    "reading",
    "creating",
    "innovating"
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
