<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 my-4">
    <LinkCard
      v-for="link in randomLinks"
      :key="link.link"
      :title="link.title"
      :desc="link.desc"
      :link="link.link"
      :img="link.img"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import LinkCard from "./LinkCard.vue";

const links: { title: string; link: string; desc: string; img: string }[] = [
  {
    link: "https://spoli.cn/",
    title: "十二",
    img: "https://spoli.cn/assets/images/avatar.jpg",
    desc: "万里 の Blog",
  },
];

const randomLinks = computed(() => links.sort(() => Math.random() - 0.5));
</script>
