import {
	LinkPreset,
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/config";

// 根据页面开关动态生成导航栏配置
const getDynamicNavBarConfig = (): NavBarConfig => {
	const links: (NavBarLink | LinkPreset)[] = [
		// 一级导航项
		{
			name: "效率软件",
			url: "/categories/效率软件/",
			icon: "feather:book-open",
		},
		{
			name: "神级网站",
			url: "/categories/神级网站/",
			icon: "feather:book-open",
		},
		{
			name: "浏览器插件",
			url: "/categories/浏览器插件/",
			icon: "feather:book-open",
		},
		// 原「导航」下拉项提升为一级，放在浏览器插件后面
		{
			name: "音乐网站",
			url: "/html/music/",
			icon: "feather:music",
		},
		{
			name: "工具箱",
			url: "/navigation/",
			icon: "feather:tool",
		},
	];

	links.push({
		name: "关于",
		url: "/content/",
		icon: "feather:info",
		children: [
			LinkPreset.About,
			LinkPreset.Friends,
		],
	});
	// 仅返回链接，其它导航搜索相关配置在模块顶层常量中独立导出
	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	// 可选：PageFind， MeiliSearch
	// 选择PageFind时：NavBarSearchMethod.PageFind,
	// 选择MeiliSearch时：NavBarSearchMethod.MeiliSearch,
	method: NavBarSearchMethod.PageFind,
	// 当选择 MeiliSearch 时的配置
	meiliSearchConfig: {
		INDEX_NAME: "posts",
		CONTENT_DIR: "src/content/posts",
		MEILI_HOST: "http://localhost:7700",
		PUBLIC_MEILI_HOST: "http://localhost:7700",
		PUBLIC_MEILI_SEARCH_KEY:
			"41134b15079da66ca545375edbea848a9b7173dff13be2028318fefa41ae8f2b",
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
