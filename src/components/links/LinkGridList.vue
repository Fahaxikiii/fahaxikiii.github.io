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
    link: "https://nanaeo.cn/",
    title: "Mlikiowa Home Village",
    img: "https://q1.qlogo.cn/g?b=qq&nk=1627126029&s=100",
    desc: "A little Village With Mlikiowa",
  },
  {
    link: "https://blog.a7bz.cn/",
    title: "荒芜",
    img: "https://blog.a7bz.cn/logo.png",
    desc: "记录分享一些笔记",
  },
];

const randomLinks = computed(() => links.sort(() => Math.random() - 0.5));
</script>
