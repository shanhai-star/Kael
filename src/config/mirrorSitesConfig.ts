// 系统镜像网站导航页的数据配置
// 想增删网站，直接改下面的 mirrorSites 数组即可，保存后构建会自动更新页面

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
];
