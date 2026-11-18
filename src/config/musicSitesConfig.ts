// 音乐网站导航页的数据配置（分栏：主流平台 / 免费特色）
// 想增删网站，改下面对应分组的 sites 数组即可，保存后构建会自动更新页面

export interface MusicSite {
	name: string; // 站点名称
	url: string; // 跳转网址
	desc: string; // 一句话介绍
	domain: string; // 卡片上显示的域名
	color: string; // logo 背景色
	short: string; // logo 里显示的字（站点简称）
}

export interface MusicGroup {
	title: string; // 分组标题
	desc: string; // 分组说明
	icon: string; // 分组图标（iconify 名称）
	sites: MusicSite[]; // 该分组下的站点
}

export const musicGroups: MusicGroup[] = [
	{
		title: "主流音乐平台",
		desc: "正版合规的在线听歌平台，曲库全、音质有保障，日常听歌的首选。",
		icon: "feather:headphones",
		sites: [
			{
				name: "网易云音乐",
				url: "https://music.163.com/",
				desc: "算法推荐强、评论区氛围独一档，适合发现新歌和喜欢社区感的用户",
				domain: "music.163.com",
				color: "#E60026",
				short: "网",
			},
			{
				name: "QQ音乐",
				url: "https://y.qq.com/",
				desc: "曲库版权最全，华语独家多，追新歌、听流行首选",
				domain: "y.qq.com",
				color: "#31C27C",
				short: "Q",
			},
			{
				name: "咪咕音乐",
				url: "https://music.migu.cn/",
				desc: "中国移动旗下，不少无损和 Hi-Res 音质免费听，性价比高",
				domain: "music.migu.cn",
				color: "#E60012",
				short: "咪",
			},
			{
				name: "酷狗音乐",
				url: "https://www.kugou.com/",
				desc: "老牌搜歌平台，曲库量大，老歌和冷门曲目覆盖全",
				domain: "kugou.com",
				color: "#2C9C69",
				short: "酷",
			},
			{
				name: "酷我音乐",
				url: "https://www.kuwo.cn/",
				desc: "无损资源丰富，音效处理与 K 歌功能有特色",
				domain: "kuwo.cn",
				color: "#E85A6C",
				short: "我",
			},
			{
				name: "Apple Music",
				url: "https://music.apple.com/cn/",
				desc: "苹果旗下，界面简洁无广告，古典、欧美资源出色，音质高",
				domain: "music.apple.com",
				color: "#FA243C",
				short: "A",
			},
			{
				name: "汽水音乐",
				url: "https://qishui.douyin.com/",
				desc: "字节旗下，短视频热歌推荐精准，基础收听免费，发现新歌方便",
				domain: "qishui.douyin.com",
				color: "#111111",
				short: "汽",
			},
		],
	},
	{
		title: "免费与特色站点",
		desc: "免注册、免费资源或原创/无版权音乐站点，满足小众与特殊需求。商用请认准版权授权。",
		icon: "feather:music",
		sites: [
			{
				name: "熊猫无损音乐网",
				url: "https://www.xmwsyy.com/",
				desc: "免注册、无广告的免费音乐聚合站，歌曲分类、排行榜与打包歌单齐全",
				domain: "xmwsyy.com",
				color: "#1B6E3C",
				short: "熊",
			},
		],
	},
];
