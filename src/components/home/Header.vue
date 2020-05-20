<template>
  <div class="flex" :class="configureFlexRow(payload)">
    <div class="flex-none">
      <h1 class="font-serif">{{ payload }}</h1>
    </div>
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

