import { defineConfig } from "./theme/config"; 

export default defineConfig({
	srcDir: './',
	themeConfig: {
		topBars: [
			{ title: 'Home', url: '/' },
			{ title: 'About', url: '/about' },
		],
		links: [
			{
				name: 'Vitepress',
				url: 'https://vitepress.dev',
				image: 'https://vitepress.dev/vitepress-logo-mini.svg',
				desc: 'VitePress is a Static Site Generator (SSG) designed for building fast, content-centric websites',
			},
			{
				name: '万里',
				url: 'https://blog.spoli.cn/',
				image: 'https://www.imalun.com/images/avatar.jpg',
				desc: '无人识我来时路，就像那孤山起了雾',
			},
		],
		rightside: {
			readmode: true,
			aside: true,
		},
		outline: {
			level: [2, 6],
		},
		favicon: {
			logo: '/favicon.svg',
			icon16: '/favicon.svg',
			icon32: '/favicon.svg',
			visibilitychange: true,
		},
	},
});
