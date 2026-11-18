// 系统镜像网站导航页的数据配置（分栏：Windows / Linux）
// 想增删网站，改下面对应分组的 sites 数组即可，保存后构建会自动更新页面
// 收录原则：只放官方或业界公认的镜像渠道，避开 Ghost/修改版等捆绑软件站点

export interface MirrorSite {
	name: string; // 站点名称
	url: string; // 跳转网址
	desc: string; // 一句话介绍
	domain: string; // 卡片上显示的域名
	color: string; // logo 背景色
	short: string; // logo 里显示的字（站点简称）
}

export interface MirrorGroup {
	title: string; // 分组标题
	desc: string; // 分组说明
	icon: string; // 分组图标（iconify 名称）
	sites: MirrorSite[]; // 该分组下的站点
}

export const mirrorGroups: MirrorGroup[] = [
	{
		title: "Windows 原版镜像",
		desc: "官方或业界公认的 Windows 原版 ISO 下载渠道，镜像纯净无捆绑。下载后建议核对 SHA1/SHA256 校验值。",
		icon: "feather:app-window",
		sites: [
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
		],
	},
	{
		title: "Linux 开源镜像",
		desc: "国内常用的开源软件镜像站，下载 Linux 发行版、软件包时，把软件源换成下面的镜像站可以大幅提升速度。",
		icon: "feather:terminal",
		sites: [
			{
				name: "清华大学开源软件镜像站",
				url: "https://mirrors.tuna.tsinghua.edu.cn/",
				desc: "老牌镜像站，覆盖 Linux 发行版、编程语言、开源软件，教育网和公网都快",
				domain: "mirrors.tuna.tsinghua.edu.cn",
				color: "#660874",
				short: "清",
			},
			{
				name: "阿里云开源镜像站",
				url: "https://mirrors.aliyun.com/",
				desc: "阿里云提供，公网下载速度快，覆盖主流系统镜像与开发工具",
				domain: "mirrors.aliyun.com",
				color: "#FF6A00",
				short: "阿",
			},
			{
				name: "中国科学技术大学开源软件镜像站",
				url: "https://mirrors.ustc.edu.cn/",
				desc: "国内最早的镜像站之一，更新及时，内容丰富",
				domain: "mirrors.ustc.edu.cn",
				color: "#C8102E",
				short: "中",
			},
			{
				name: "华为云开源镜像站",
				url: "https://mirrors.huaweicloud.com/",
				desc: "华为云提供，稳定可靠，覆盖主流操作系统与开源组件",
				domain: "mirrors.huaweicloud.com",
				color: "#0F6FC5",
				short: "华",
			},
			{
				name: "网易开源镜像站",
				url: "https://mirrors.163.com/",
				desc: "网易提供的老牌镜像站，老用户众多",
				domain: "mirrors.163.com",
				color: "#E1251B",
				short: "网",
			},
			{
				name: "腾讯云开源软件镜像站",
				url: "https://mirrors.cloud.tencent.com/",
				desc: "腾讯云提供，公网访问快，覆盖常见发行版与软件包",
				domain: "mirrors.cloud.tencent.com",
				color: "#0052D9",
				short: "腾",
			},
			{
				name: "北京外国语大学开源软件镜像站",
				url: "https://mirrors.bfsu.edu.cn/",
				desc: "教育网镜像站，TUNA 成员站，覆盖常见发行版",
				domain: "mirrors.bfsu.edu.cn",
				color: "#2E8B57",
				short: "北",
			},
			{
				name: "上海交通大学开源镜像站",
				url: "https://mirror.sjtu.edu.cn/",
				desc: "教育网镜像站，提供主流系统与开源软件镜像",
				domain: "mirror.sjtu.edu.cn",
				color: "#B01F24",
				short: "上",
			},
			{
				name: "南京大学开源镜像站",
				url: "https://mirror.nju.edu.cn/",
				desc: "教育网镜像站，覆盖常用发行版与软件源",
				domain: "mirror.nju.edu.cn",
				color: "#4A4A9C",
				short: "南",
			},
			{
				name: "浙江大学开源软件镜像站",
				url: "https://mirrors.zju.edu.cn/",
				desc: "教育网镜像站，提供系统与开源软件下载",
				domain: "mirrors.zju.edu.cn",
				color: "#005A9C",
				short: "浙",
			},
		],
	},
];
