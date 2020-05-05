<template>
  <div class="flex" :class="configureFlexRow(payload)">
    <div class="flex-none px-4 py-2 m-4">
      <h1 class="font-serif">{{ payload }}</h1>
    </div>
    <div class="flex-shrink y-divider bg-gray-800 px-4 my-10"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop() private payload!: string;

  configureFlexRow(content: string): string {
    content = this.payload;
    const header = "Christine Nguyen is ...";

    if (content == header) return "flex-row";
    else return "flex-row-reverse";
  }
}
</script>

<style scoped></style>
