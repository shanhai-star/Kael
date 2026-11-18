// Windows 系统镜像下载网站导航页的数据配置
// 想增删网站，直接改下面的 mirrorSites 数组即可，保存后构建会自动更新页面
// 收录原则：只放官方或业界公认的原版镜像渠道，避开 Ghost/修改版等捆绑软件站点

export interface MirrorSite {
	name: string; // 站点名称
	url: string; // 跳转网址
	desc: string; // 一句话介绍
	domain: string; // 卡片上显示的域名
	color: string; // logo 背景色
	short: string; // logo 里显示的字（站点简称）
}

export const mirrorSites: MirrorSite[] = [
	{
		name: "微软官方下载中心",
		url: "https://www.microsoft.com/zh-cn/software-download",
		desc: "微软官方渠道，最权威安全，可下载最新版 Windows 10/11 原版 ISO，强烈推荐首选",
		domain: "microsoft.com/software-download",
		color: "#0078D4",
		short: "微",
	},
	{
		name: "MSDN, 我告诉你",
		url: "https://next.itellyou.cn/",
		desc: "国内 IT 圈老牌原版镜像站，版本齐全、标注 SHA1 校验值，覆盖 Win7 到 Win11",
		domain: "next.itellyou.cn",
		color: "#C8102E",
		short: "M",
	},
	{
		name: "TechBench by WZT",
		url: "https://tb.rg-adguard.net/public.php",
		desc: "直连微软官方文件服务器的原版 ISO 直链，文件与官方一致、纯净无修改",
		domain: "tb.rg-adguard.net",
		color: "#0F6FC5",
		short: "T",
	},
	{
		name: "UUP dump",
		url: "https://uupdump.net/",
		desc: "实时同步微软更新服务器，可生成最新正式版与预览版 ISO，适合技术爱好者",
		domain: "uupdump.net",
		color: "#5B4B8A",
		short: "U",
	},
	{
		name: "HelloWindows",
		url: "https://hellowindows.cn/",
		desc: "专注原版 Windows，界面简洁，各版本功能差异标注详细，新手友好",
		domain: "hellowindows.cn",
		color: "#2E8B57",
		short: "H",
	},
	{
		name: "山己木子",
		url: "https://msdn.sjjzm.com/",
		desc: "国内原版镜像站，版本用中文标注，提供迅雷、网盘等多种下载渠道",
		domain: "msdn.sjjzm.com",
		color: "#B01F24",
		short: "山",
	},
	{
		name: "HEiDOC Windows ISO Downloader",
		url: "https://www.heidoc.net/",
		desc: "国外老牌工具站，自动获取微软官方 ISO 直链，支持 Win7 到 Win11 各版本",
		domain: "heidoc.net",
		color: "#444444",
		short: "H",
	},
];
