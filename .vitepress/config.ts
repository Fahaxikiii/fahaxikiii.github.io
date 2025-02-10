import { defineConfig } from "vitepress-theme-async/config";
// import links from "./data/links.json";

export default defineConfig({
  srcDir: "./",
  rewrites: {
    "posts/(.*)": "(.*)",
  },
  title: "十二",
  titleTemplate: ":title - 十二的小站",
  description: "万里 の Blog",
  sitemap: {
    hostname: "https://blog.spoli.cn/",
  },
  cleanUrls: true,
  markdown: {
    theme: {
      light: "github-light",
      dark: "one-dark-pro",
    },
  },
  themeConfig: {
    author: "万里",
    user: {
      name: "万里",
      firstName: "",
      lastName: "",
      //email: "920113370213@njust.edu.cn",
      domain: "https://blog.spoli.cn/",
      avatar: "/favicon.jpg",
      describe: "无人识我来时路，就像那孤山起了雾",
      //ruleText: "暂不接受个人博客以外的友链申请，确保您的网站内容积极向上，文章至少30篇，原创70%以上，独立域名并且部署HTTPS。",
    },
    // favicon: {
    //   logo: "/favicon.jpg",
    //   icon16: "/favicon.jpg",
    //   icon32: "/favicon.jpg",
    //   visibilitychange: true,
    // },
    topBars: [
      {
        title: "主页",
        url: "/",
      },
      {
        title: "归档",
        url: "/archives/",
      },
      {
        title: "友链",
        url: "/links/",
      },
    //   {
    //     title: "关于",
    //     url: "/about/",
    //   },
    ],
    page: {
      archives: "/archives/",
    },
    sidebar: {
      typedTextPrefix: "",
      typedText: ["年少不得之物终将困其一生"],
    //   info: [
    //     {
    //       key: "residence",
    //       val: "Mars",
    //     },
    //     {
    //       key: "city",
    //       val: "WuHan",
    //     },
    //     {
    //       key: "age",
    //       val: "18",
    //     },
    //   ],
      social: [
        {
          icon: `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M32 524.18q0 155.64 89.52 279.84t232.02 173.91q5.64 0.93 9.39 0.93t6.09-1.41 3.75-2.82 1.89-4.68 0.48-4.68v-94.23q-34.68 3.75-61.89-0.48t-42.66-13.14-27.18-22.02-15.93-23.91-8.43-22.5-5.16-13.59q-8.43-14.07-25.32-25.77t-25.32-18.75-1.89-13.59q46.89-24.39 105.93 61.89 31.89 47.82 111.57 28.14 9.39-38.43 37.5-65.64Q307.61 722 255.11 661.04t-52.5-148.14q0-81.57 51.57-141.57-20.64-60.93 5.64-128.43 27.18-1.89 60.93 10.77t47.34 21.57 23.91 16.41q53.43-15 120.48-15t121.41 15q12.18-8.43 27.18-17.82t45.93-20.16 57.18-8.91q25.32 66.57 6.57 126.57 52.5 60 52.5 141.57 0 87.18-53.43 148.59t-161.25 80.16q40.32 40.32 40.32 97.5v120.93q0 0.93 0.93 2.82 0 5.64 0.48 8.43t4.23 5.64 11.25 2.82q143.43-48.75 234.84-173.91t91.41-281.73q0-97.5-37.98-186.57t-102.18-153.27-153.27-102.18T512.03 44.15 325.46 82.13 172.19 184.31t-102.18 153.27-37.98 186.57z"></path></svg>`,
          url: "https://github.com/Fahaxikiii",
          name: "Github",
        },
      ],
    },
    footer: {
       powered: {
         enable: false,
       },
    //   beian: {
    //     enable: false,
    //   },
    //   copyrightYear: "2019",
      liveTime: {
        enable: true,
        prefix: "footer.tips",
        startTime: "02/10/2025 20:00:00",
      },
    },
    cover: {
      default: "/images/logo/def_post_cover.png",
    },
    links: "https://blog.spoli.cn/links.json",
    rightside: {
      readmode: true,
      aside: false,
    },
    outline: {
      level: [2, 6],
    },
    indexGenerator: {
      perPage: 8,
      static: true,
    },
    archiveGenerator: {
      dateFmt: "YYYY",
      static: true,
    },
    // rss: {
    //   enable: true,
    //   baseUrl: "https://www.imalun.com",
    //   fileName: "atom.xml",
    // },
    noticeOutdate: {
      enable: true,
    },
    search: {
      provider: "local",
    },
    // reward: {
    //   methods: [
    //     { name: "微信", path: "/images/reward/wx_pay.jpg" },
    //     { name: "支付宝", path: "/images/reward/alipay.jpg" },
    //     { name: "QQ", path: "/images/reward/qq_pay.jpg" },
    //   ],
    // },
  },
});