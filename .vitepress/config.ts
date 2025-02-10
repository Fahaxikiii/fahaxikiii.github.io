import { defineConfig } from 'vitepress-theme-async/config';

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
				url: 'https://blog.spoli.com/',
				image: 'https://blog.spoli.com/favicon.jpg',
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
			logo: '/favicon.jpg',
			icon16: '/favicon.jpg',
			icon32: '/favicon.jpg',
			visibilitychange: true,
		},
	},
});
