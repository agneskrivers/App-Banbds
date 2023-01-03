import type {
	INewsCompact,
	IHotNewsCompact,
	IProjectInfo,
	INewsInfo,
	IPostInfo,
	IMyPostInfo,
} from '@interfaces';

export const newsCompact: INewsCompact = {
	createdAt: Date.now(),
	id: '1',
	thumbnail:
		'https://file4.batdongsan.com.vn/crop/610x342/2022/12/24/YSUn3oGJ/20221224163310-ff55.jpg',
	title: 'Dự Báo BĐS 2023: Nguồn Vốn Được Tháo Gỡ, Thị Trường Khởi Sắc',
};

export const hotNewsCompact: IHotNewsCompact = {
	id: '11',
	description:
		'T%E1%BA%A1i%20di%E1%BB%85n%20%C4%91%C3%A0n%20%E2%80%9CD%E1%BB%B1%20b%C3%A1o%20th%E1%BB%8B%20tr%C6%B0%E1%BB%9Dng%20b%E1%BA%A5t%20%C4%91%E1%BB%99ng%20s%E1%BA%A3n%202023%E2%80%9D%20do%20T%E1%BA%A1p%20ch%C3%AD%20Di%E1%BB%85n%20%C4%91%C3%A0n%20Doanh%20nghi%E1%BB%87p%20t%E1%BB%95%20ch%E1%BB%A9c,%20c%C3%A1c%20chuy%C3%AAn%20gia%20%C4%91%E1%BB%81u%20th%E1%BB%ABa%20nh%E1%BA%ADn%20th%E1%BB%8B%20tr%C6%B0%E1%BB%9Dng%20b%E1%BA%A5t%20%C4%91%E1%BB%99ng%20s%E1%BA%A3n%20%C4%91%C3%A3%20tr%E1%BA%A3i%20qua%20m%E1%BB%99t%20giai%20%C4%91o%E1%BA%A1n%20v%C3%B4%20c%C3%B9ng%20kh%C3%B3%20kh%C4%83n%20k%E1%BB%83%20t%E1%BB%AB%20khi%20t%C3%ADn%20d%E1%BB%A5ng%20b%E1%BB%8B%20si%E1%BA%BFt.%20Tuy%20nhi%C3%AAn,%20v%E1%BB%9Bi%20nh%E1%BB%AFng%20%C4%91%E1%BB%99ng%20th%C3%A1i%20g%E1%BA%A7n%20%C4%91%C3%A2y%20c%E1%BB%A7a%20Ch%C3%ADnh%20ph%E1%BB%A7,%20%C4%91%E1%BA%B7c%20bi%E1%BB%87t%20l%C3%A0%20nh%E1%BB%AFng%20th%C3%A1o%20g%E1%BB%A1%20v%E1%BB%81%20ngu%E1%BB%93n%20v%E1%BB%91n,%20th%E1%BB%8B%20tr%C6%B0%E1%BB%9Dng%20%C4%91%C6%B0%E1%BB%A3c%20nh%E1%BA%ADn%20%C4%91%E1%BB%8Bnh%20s%E1%BA%BD%20s%E1%BB%9Bm%20kh%E1%BB%9Fi%20s%E1%BA%AFc%20trong%20n%C4%83m%202023.',
	thumbnail:
		'https://file4.batdongsan.com.vn/crop/610x342/2022/12/24/YSUn3oGJ/20221224163310-ff55.jpg',
	title: 'Dự Báo BĐS 2023: Nguồn Vốn Được Tháo Gỡ, Thị Trường Khởi Sắc',
};
export const project: IProjectInfo = {
	title: 'Thanh%20B%C3%ACnh%20Garden',
	acreages: '3,315 m²',
	address:
		'3 Nguyễn Cảnh Dị, KĐT Đại Kim, Phường Định Công, Quận Hoàng Mai, Hà Nội',
	coordinate: {
		latitude: 20.9777888,
		longitude: 105.8360343,
	},
	images: [
		'https://file4.batdongsan.com.vn/2022/11/15/20221115085640-3b6d_wm.jpg',
		'https://file4.batdongsan.com.vn/2022/11/15/20221115091409-5edd_wm.jpg',
		'https://file4.batdongsan.com.vn/2022/11/15/20221115085645-bdc4_wm.jpg',
		'https://file4.batdongsan.com.vn/2022/11/15/20221115091445-1c32_wm.jpg',
		'https://file4.batdongsan.com.vn/2022/11/15/20221115091440-8060_wm.jpg',
		'https://file4.batdongsan.com.vn/2022/11/15/20221115091435-b4a3_wm.jpg',
		'https://file4.batdongsan.com.vn/2022/11/15/20221115091430-b008_wm.jpg',
		'https://file4.batdongsan.com.vn/2022/11/15/20221115091425-103f_wm.jpg',
	],
	investor: {
		avatar: 'https://file4.batdongsan.com.vn/2022/11/15/20221115091529-6c5d_wm.jpg',
		name: 'Công ty CP Thanh Bình Hà Nội',
	},
	overview: {
		courtNumber: 1,
		numberOfApartments: 255,
		legal: 'Sổ hồng lâu dài',
	},
	prices: {
		min: 300,
		max: 1000,
	},
	status: 'onSale',
	link: 'https://claimether.com',
	content:
		'%3Cp%3E%3Cstrong%3EThanh%20B&igrave;nh%20Garden%3C/strong%3E&nbsp;l&agrave;%20d%E1%BB%B1%20&aacute;n%20chung%20c%C6%B0%20n%E1%BA%B1m%20trong%20K%C4%90T%20%C4%90%E1%BA%A1i%20Kim,%20qu%E1%BA%ADn%20Ho&agrave;ng%20Mai,%20TP.%20H&agrave;%20N%E1%BB%99i,%20do%20C&ocirc;ng%20ty%20C%E1%BB%95%20ph%E1%BA%A7n%20Thanh%20B&igrave;nh%20H&agrave;%20N%E1%BB%99i%20l&agrave;m%20ch%E1%BB%A7%20%C4%91%E1%BA%A7u%20t%C6%B0.%20V%E1%BB%9Bi%20v%E1%BB%8B%20tr&iacute;%20%C4%91%E1%BA%AFc%20%C4%91%E1%BB%8Ba%20ngay%20c&aacute;c%20tr%E1%BB%A5c%20giao%20th&ocirc;ng%20huy%E1%BA%BFt%20m%E1%BA%A1ch%20ph&iacute;a%20Nam%20H&agrave;%20N%E1%BB%99i,%20thi%E1%BA%BFt%20k%E1%BA%BF%20c%C4%83n%20h%E1%BB%99%20hi%E1%BB%87n%20%C4%91%E1%BA%A1i,%20di%E1%BB%87n%20t&iacute;ch%20ph&ugrave;%20h%E1%BB%A3p,%20chung%20c%C6%B0%20Thanh%20B&igrave;nh%20Garden%20s%E1%BA%BD%20g&oacute;p%20ph%E1%BA%A7n%20%C4%91&aacute;p%20%E1%BB%A9ng%20nhu%20c%E1%BA%A7u%20nh&agrave;%20%E1%BB%9F%20cho%20c&aacute;c%20gia%20%C4%91&igrave;nh%20tr%E1%BA%BB.&nbsp;%3C/p%3E%0A%0A%3Cp%3E%3Cimg%20alt=%22Ph%E1%BB%91i%20c%E1%BA%A3nh%20t%E1%BB%95ng%20th%E1%BB%83%20d%E1%BB%B1%20%C3%A1n%20chung%20c%C6%B0%20Thanh%20B%C3%ACnh%20Garden%22%20src=%22https://file4.batdongsan.com.vn/2022/11/15/20221115085634-43cd_wm.jpg%22%20style=%22width:%201088px;%20height:%20602px;%22%20/%3E%3C/p%3E%0A%0A%3Ch3%3EV%E1%BB%8B%20tr&iacute;%3C/h3%3E%0A%0A%3Cp%3ED%E1%BB%B1%20&aacute;n%20chung%20c%C6%B0%20Thanh%20B&igrave;nh%20Garden%20%C4%90%E1%BA%A1i%20Kim%20t%E1%BB%8Da%20l%E1%BA%A1c%20t%E1%BA%A1i%20s%E1%BB%91%203%20Nguy%E1%BB%85n%20C%E1%BA%A3nh%20D%E1%BB%8B,%20ph%C6%B0%E1%BB%9Dng%20%C4%90%E1%BB%8Bnh%20C&ocirc;ng,%20qu%E1%BA%ADn%20Ho&agrave;ng%20Mai,%20H&agrave;%20N%E1%BB%99i.%20V%E1%BB%8B%20tr&iacute;%20d%E1%BB%B1%20&aacute;n%20Thanh%20B&igrave;nh%20Garden%20%C4%91%C6%B0%E1%BB%A3c%20%C4%91&aacute;nh%20gia%20cao%20khi%20l&agrave;%20giao%20%C4%91i%E1%BB%83m%20c%E1%BB%A7a%203%20qu%E1%BA%ADn%20Ho&agrave;ng%20Mai,%20Thanh%20Xu&acirc;n,%20Hai%20B&agrave;%20Tr%C6%B0ng,%20g%E1%BA%A7n%20k%E1%BB%81%20c&aacute;c%20tr%E1%BB%A5c%20%C4%91%C6%B0%E1%BB%9Dng%20ch&iacute;nh%20c%E1%BB%A7a%20H&agrave;%20N%E1%BB%99i%20nh%C6%B0%20%C4%91%C6%B0%E1%BB%9Dng%20Gi%E1%BA%A3i%20Ph&oacute;ng,%20%C4%90%E1%BA%A1i%20La%20&ndash;%20Tr%C6%B0%E1%BB%9Dng%20Chinh,%20V&agrave;nh%20%C4%91ai%202,%20V&agrave;nh%20%C4%91ai%202,5%20m%E1%BB%9F%20r%E1%BB%99ng%20n%E1%BB%91i%20v%E1%BB%9Bi%20tr%E1%BB%A5c%20%C4%91%C6%B0%E1%BB%9Dng%20Gi&aacute;p%20B&aacute;t%20&ndash;%20T&acirc;n%20Mai,%20g%E1%BA%A7n%202%20b%E1%BA%BFn%20xe%20Gi&aacute;p%20B&aacute;t%20v&agrave;%20N%C6%B0%E1%BB%9Bc%20Ng%E1%BA%A7m,&hellip;%20T%E1%BB%AB%20chung%20c%C6%B0%20Thanh%20B&igrave;nh%20Garden,%20c%C6%B0%20d&acirc;n%20d%E1%BB%85%20d&agrave;ng%20di%20chuy%E1%BB%83n%20v&agrave;o%20trung%20t&acirc;m%20th&agrave;nh%20ph%E1%BB%91%20c%C5%A9ng%20nh%C6%B0%20%C4%91i%20c&aacute;c%20t%E1%BB%89nh%20ph&iacute;a%20Nam%20H&agrave;%20N%E1%BB%99i.%3C/p%3E%0A%0A%3Cul%3E%0A%09%3Cli%3EC&aacute;ch%20500m%20%C4%91%E1%BA%BFn%20h%E1%BB%93%20%C4%90%E1%BB%8Bnh%20C&ocirc;ng,%20tr%C6%B0%E1%BB%9Dng%20Qu%E1%BB%91c%20t%E1%BA%BF%3C/li%3E%0A%09%3Cli%3E1km%20%C4%91%E1%BA%BFn%20c&ocirc;ng%20vi&ecirc;n%20Linh%20%C4%90&agrave;m%3C/li%3E%0A%09%3Cli%3E1km%20%C4%91%E1%BA%BFn%20Aeon%20Ho&agrave;ng%20Mai%20(%C4%91ang%20x&acirc;y%20d%E1%BB%B1ng)%3C/li%3E%0A%09%3Cli%3E2km%20%C4%91%E1%BA%BFn%20b%E1%BA%BFn%20xe%20Gi&aacute;p%20B&aacute;t%3C/li%3E%0A%09%3Cli%3E3,5km%20%C4%91%E1%BA%BFn%20b%E1%BA%BFn%20xe%20N%C6%B0%E1%BB%9Bc%20Ng%E1%BA%A7m%3C/li%3E%0A%09%3Cli%3E3,5km%20%C4%91%E1%BA%BFn%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20Kinh%20t%E1%BA%BF%20Qu%E1%BB%91c%20d&acirc;n%3C/li%3E%0A%3C/ul%3E%0A%0A%3Cp%3E%3Cimg%20alt=%22S%C6%A1%20%C4%91%E1%BB%93%20v%E1%BB%8B%20tr%C3%AD%20d%E1%BB%B1%20%C3%A1n%20chung%20c%C6%B0%20Thanh%20B%C3%ACnh%20Garden%22%20src=%22https://file4.batdongsan.com.vn/2022/11/15/20221115085835-fb88_wm.jpg%22%20style=%22width:%201200px;%20height:%20675px;%22%20/%3E%3C/p%3E%0A%0A%3Ch3%3ETi%E1%BB%87n%20&iacute;ch%3C/h3%3E%0A%0A%3Cp%3EChung%20c%C6%B0%20Thanh%20B&igrave;nh%20Garden%20%C4%91%C6%B0%E1%BB%A3c%20%C4%91%E1%BA%A7u%20t%C6%B0%20h%E1%BB%87%20th%E1%BB%91ng%20ti%E1%BB%87n%20&iacute;ch%20t%C6%B0%C6%A1ng%20t%E1%BB%B1%20nh%C6%B0%20c&aacute;c%20chung%20c%C6%B0%20cao%20c%E1%BA%A5p,%20%C4%91&aacute;p%20%E1%BB%A9ng%20c&aacute;c%20nhu%20c%E1%BA%A7u%20sinh%20ho%E1%BA%A1t,%20vui%20ch%C6%A1i,%20gi%E1%BA%A3i%20tr&iacute;%20c%E1%BB%A7a%20c%C6%B0%20d&acirc;n.%20D%E1%BB%B1%20&aacute;n%20n%E1%BA%B1m%20c%E1%BA%A1nh%20h%E1%BB%93%20%C4%90%E1%BA%A7m%20%C4%90%E1%BA%ABy,%20mang%20%C4%91%E1%BA%BFn%20kh&ocirc;ng%20kh&iacute;%20tho&aacute;ng%20%C4%91&atilde;ng,%20trong%20l&agrave;nh%20quanh%20n%C4%83m%20cho%20c%C6%B0%20d&acirc;n.%3C/p%3E%0A%0A%3Cul%3E%0A%09%3Cli%3EK%E1%BA%BF%20b&ecirc;n%20h%E1%BB%93%20%C4%90%E1%BA%A7m%20%C4%90%E1%BA%ABy,%20g%E1%BA%A7n%20h%E1%BB%93%20%C4%90%E1%BB%8Bnh%20C&ocirc;ng,%20h%E1%BB%93%20Linh%20%C4%90&agrave;m%3C/li%3E%0A%09%3Cli%3E2%20t%E1%BA%A7ng%20th%C6%B0%C6%A1ng%20m%E1%BA%A1i%20v%E1%BB%9Bi%20c&aacute;c%20ti%E1%BB%87n%20&iacute;ch:%20c%E1%BB%ADa%20h&agrave;ng%20ti%E1%BB%87n%20l%E1%BB%A3i,%20ph&ograve;ng%20gym,%20spa&hellip;%3C/li%3E%0A%09%3Cli%3E2%20t%E1%BA%A7ng%20h%E1%BA%A7m%20&amp;%201%20t%E1%BA%A7ng%20%C4%91%E1%BB%83%20&ocirc;%20t&ocirc;%20tr&ecirc;n%20cao%3C/li%3E%0A%3C/ul%3E%0A%0A%3Cp%3E%3Cimg%20alt=%22%E1%BA%A2nh%20minh%20h%E1%BB%8Da%20c%C3%A1c%20ti%E1%BB%87n%20%C3%ADch%20n%E1%BB%99i%20khu%20d%E1%BB%B1%20%C3%A1n%20Thanh%20B%C3%ACnh%20Garden%22%20src=%22https://file4.batdongsan.com.vn/2022/11/15/20221115090459-b6f7_wm.jpg%22%20style=%22width:%201126px;%20height:%20434px;%22%20/%3E%3C/p%3E%0A%0A%3Ch3%3EThi%E1%BA%BFt%20k%E1%BA%BF%3C/h3%3E%0A%0A%3Cp%3ED%E1%BB%B1%20&aacute;n%20chung%20c%C6%B0%20Thanh%20B&igrave;nh%20Garden%20Ho&agrave;ng%20Mai%20l&agrave;%201%20t&ograve;a%20th&aacute;p%20cao%2021%20t%E1%BA%A7ng%20n%E1%BB%95i,%202%20t%E1%BA%A7ng%20h%E1%BA%A7m,%202%20s&agrave;n%20trung%20t&acirc;m%20th%C6%B0%C6%A1ng%20m%E1%BA%A1i,%20t%E1%BA%A7ng%203%20%C4%91%E1%BB%83%20xe%20&ocirc;%20t&ocirc;%20v&agrave;%20t%E1%BA%A7ng%204%20&ndash;%2021%20l&agrave;%20c&aacute;c%20c%C4%83n%20h%E1%BB%99%20%E1%BB%9F.%20Chung%20c%C6%B0%20n&agrave;y%20s%E1%BA%BD%20cung%20%E1%BB%A9ng%20cho%20th%E1%BB%8B%20tr%C6%B0%E1%BB%9Dng%20255%20c%C4%83n%20h%E1%BB%99%20(thi%E1%BA%BFt%20k%E1%BA%BF%202%20ph&ograve;ng%20ng%E1%BB%A7).%3C/p%3E%0A%0A%3Cul%3E%0A%09%3Cli%3EM%E1%BA%B7t%20b%E1%BA%B1ng%20t%E1%BA%A7ng%20%C4%91i%E1%BB%83n%20h&igrave;nh:%2015%20c%C4%83n/s&agrave;n,%204%20thang%20m&aacute;y%3C/li%3E%0A%09%3Cli%3EDi%E1%BB%87n%20t&iacute;ch%20c%C4%83n%20h%E1%BB%99:%2045m2%20&ndash;%2060m2%20&ndash;%2063m2%20&ndash;%2069m2%3C/li%3E%0A%3C/ul%3E%0A%0A%3Cp%3EC%C4%83n%20h%E1%BB%99%20Thanh%20B&igrave;nh%20Garden%20%C4%91%C6%B0%E1%BB%A3c%20thi%E1%BA%BFt%20k%E1%BA%BF%20hi%E1%BB%87n%20%C4%91%E1%BA%A1i,%20th&ocirc;ng%20tho&aacute;ng.%20Ph&ograve;ng%20kh&aacute;ch%20c&oacute;%20ban%20c&ocirc;ng%20r%E1%BB%99ng.%20T%E1%BA%A5t%20c%E1%BA%A3%20ph&ograve;ng%20ng%E1%BB%A7%20%C4%91%E1%BB%81u%20c&oacute;%20c%E1%BB%ADa%20s%E1%BB%95%20l%E1%BA%A5y%20&aacute;nh%20s&aacute;ng%20v&agrave;%20kh&ocirc;ng%20kh&iacute;%20t%E1%BB%B1%20nhi&ecirc;n.%20B%E1%BA%BFp%20%C4%91%C6%B0%E1%BB%A3c%20%C4%91%E1%BA%B7t%20c%E1%BA%A1nh%20logia,%20gi&uacute;p%20c%C4%83n%20h%E1%BB%99%20kh&ocirc;ng%20b%E1%BB%8B%20&aacute;m%20m&ugrave;i%20khi%20n%E1%BA%A5u%20%C4%83n.%3C/p%3E%0A%0A%3Cp%3EM%E1%BB%99t%20s%E1%BB%91%20h&igrave;nh%20%E1%BA%A3nh%20m%E1%BA%B7t%20b%E1%BA%B1ng%20thi%E1%BA%BFt%20k%E1%BA%BF%20c%C4%83n%20h%E1%BB%99%20Thanh%20B&igrave;nh%20Garden:%3C/p%3E%0A%0A%3Cp%3E%3Cimg%20alt=%22%22%20src=%22https://file4.batdongsan.com.vn/2022/11/15/20221115085153-4b43_wm.jpg%22%20style=%22width:%201000px;%20height:%20563px;%22%20/%3E%3C/p%3E%0A%0A%3Cp%3E%3Cimg%20alt=%22%22%20src=%22https://file4.batdongsan.com.vn/2022/11/15/20221115085216-71a5_wm.jpg%22%20/%3E%3C/p%3E%0A%0A%3Cp%3E%3Cimg%20alt=%22%22%20src=%22https://file4.batdongsan.com.vn/2022/11/15/20221115085224-ccb2_wm.jpg%22%20/%3E%3C/p%3E%0A%0A%3Cp%3E%3Cimg%20alt=%22%22%20src=%22https://file4.batdongsan.com.vn/2022/11/15/20221115085147-39ad_wm.jpg%22%20/%3E%3C/p%3E%0A%0A%3Cp%3EM%E1%BB%99t%20s%E1%BB%91%20h&igrave;nh%20%E1%BA%A3nh%20ph%E1%BB%91i%20c%E1%BA%A3nh%20c%C4%83n%20h%E1%BB%99%20m%E1%BA%ABu%20Thanh%20B&igrave;nh%20Garden:%3C/p%3E%0A%0A%3Cp%3E%3Cimg%20alt=%22%22%20src=%22https://file4.batdongsan.com.vn/2022/11/15/20221115084636-187b_wm.jpg%22%20/%3E%3C/p%3E%0A%0A%3Cp%3E%3Cimg%20alt=%22%22%20src=%22https://file4.batdongsan.com.vn/2022/11/15/20221115084642-36d8_wm.jpg%22%20/%3E%3C/p%3E%0A%0A%3Cp%3E%3Cimg%20alt=%22%22%20src=%22https://file4.batdongsan.com.vn/2022/11/15/20221115084656-b25b_wm.jpg%22%20/%3E%3C/p%3E%0A%0A%3Cp%3E%3Cimg%20alt=%22%22%20src=%22https://file4.batdongsan.com.vn/2022/11/15/20221115084703-a26a_wm.jpg%22%20/%3E%3C/p%3E%0A%0A%3Ch2%3EPh&aacute;p%20l&yacute;%3C/h2%3E%0A%0A%3Cp%3ED%E1%BB%B1%20&aacute;n%20chung%20c%C6%B0%20Thanh%20B&igrave;nh%20Garden%20n%E1%BA%B1m%20trong%20d%E1%BB%B1%20&aacute;n%20Nh&agrave;%20%E1%BB%9F%20b&aacute;n%20cho%20c&aacute;n%20b%E1%BB%99,%20chi%E1%BA%BFn%20s%E1%BB%B9%20c&ocirc;ng%20an%20th&agrave;nh%20ph%E1%BB%91%20H&agrave;%20N%E1%BB%99i%20v&agrave;%20c&aacute;c%20%C4%91%E1%BB%91i%20t%C6%B0%E1%BB%A3ng%20kh&aacute;c,%20thu%E1%BB%99c%20Khu%20%C4%91&ocirc;%20th%E1%BB%8B%20m%E1%BB%9Bi%20B%E1%BA%AFc%20%C4%90%E1%BA%A1i%20Kim%20m%E1%BB%9F%20r%E1%BB%99ng,%20qu%E1%BA%ADn%20Ho&agrave;ng%20Mai,%20H&agrave;%20N%E1%BB%99i.%20D%E1%BB%B1%20&aacute;n%20%C4%91&atilde;%20%C4%91%C6%B0%E1%BB%A3c%20UBND%20TP.%20H&agrave;%20N%E1%BB%99i%20ph&ecirc;%20duy%E1%BB%87t%20Quy%20ho%E1%BA%A1ch%20chi%20ti%E1%BA%BFt%201/500%20t%E1%BA%A1i%20Quy%E1%BA%BFt%20%C4%91%E1%BB%8Bnh%20s%E1%BB%91%2086/2002/Q%C4%90-UB%20ng&agrave;y%2010/6/2002%20v&agrave;%20ch%E1%BA%A5p%20thu%E1%BA%ADn%20%C4%91%E1%BA%A7u%20t%C6%B0%20t%E1%BA%A1i%20v%C4%83n%20b%E1%BA%A3n%20s%E1%BB%91%208631/UBND-XDGT%20ng&agrave;y%202/12/2015.%3C/p%3E%0A%0A%3Ch2%3ETi%E1%BA%BFn%20%C4%91%E1%BB%99%3C/h2%3E%0A%0A%3Cp%3ED%E1%BB%B1%20&aacute;n%20Thanh%20B&igrave;nh%20Garden%20%C4%91%C6%B0%E1%BB%A3c%20kh%E1%BB%9Fi%20c&ocirc;ng%20x&acirc;y%20d%E1%BB%B1ng%20t%E1%BB%AB%20Qu&yacute;%201/2021,%20hi%E1%BB%87n%20%C4%91ang%20%C4%91%C6%B0%E1%BB%A3c%20thi%20c&ocirc;ng%20t&iacute;ch%20c%E1%BB%B1c%20%C4%91%E1%BB%83%20k%E1%BB%8Bp%20ho&agrave;n%20th&agrave;nh%20v&agrave;%20b&agrave;n%20giao%20c%C4%83n%20h%E1%BB%99%20cho%20ng%C6%B0%E1%BB%9Di%20mua%20trong%20Qu&yacute;%204/2022.&nbsp;%3C/p%3E%0A%0A%3Cp%3E%3Cimg%20alt=%22%22%20src=%22https://file4.batdongsan.com.vn/2022/11/15/20221115084218-94fc_wm.jpg%22%20/%3E%3C/p%3E%0A',
};
export const news: INewsInfo = {
	title: 'C%E1%BA%ADp%20Nh%E1%BA%ADt%20Ti%E1%BA%BFn%20%C4%90%E1%BB%99%20Empire%20City%20Th%E1%BB%A7%20Thi%C3%AAm%20V%C3%A0%20Gi%C3%A1%20B%C3%A1n,%20Gi%C3%A1%20Thu%C3%AA%20Hi%E1%BB%87n%20T%E1%BA%A1i',
	description:
		'Ti%E1%BA%BFn%20%C4%91%E1%BB%99%20Empire%20City%20Th%E1%BB%A7%20Thi%C3%AAm%20l%C3%A0%20m%E1%BB%99t%20trong%20nh%E1%BB%AFng%20v%E1%BA%A5n%20%C4%91%E1%BB%81%20%C4%91%C6%B0%E1%BB%A3c%20nhi%E1%BB%81u%20ng%C6%B0%E1%BB%9Di%20quan%20t%C3%A2m%20khi%20t%C3%ACm%20ki%E1%BA%BFm%20th%C3%B4ng%20tin%20v%E1%BB%81%20d%E1%BB%B1%20%C3%A1n%20n%C3%A0y.%20Do%20%C4%91%C3%A2y%20l%C3%A0%20m%E1%BB%99t%20d%E1%BB%B1%20%C3%A1n%20ph%E1%BB%A9c%20h%E1%BB%A3p%20nh%C3%A0%20%E1%BB%9F%20v%C3%A0%20th%C6%B0%C6%A1ng%20m%E1%BA%A1i%20v%E1%BB%9Bi%20nhi%E1%BB%81u%20ph%C3%A2n%20khu,%20tri%E1%BB%83n%20khai%20theo%20t%E1%BB%ABng%20giai%20%C4%91o%E1%BA%A1n%20kh%C3%A1c%20nhau%20n%C3%AAn%20nhi%E1%BB%81u%20ng%C6%B0%E1%BB%9Di%20b%C4%83n%20kho%C4%83n%20kh%C3%B4ng%20r%C3%B5%20Empire%20City%20ti%E1%BA%BFn%20%C4%91%E1%BB%99%20%C4%91%E1%BA%BFn%20%C4%91%C3%A2u,%20%C4%91%C3%A3%20ho%C3%A0n%20thi%E1%BB%87n,%20b%C3%A0n%20giao%20h%E1%BA%BFt%20ch%C6%B0a,%20c%C3%B3%20c%C3%B2n%20t%C3%B2a%20n%C3%A0o%20ch%C6%B0a%20m%E1%BB%9F%20b%C3%A1n%20kh%C3%B4ng?%20Nh%E1%BB%AFng%20th%C3%B4ng%20tin%20d%C6%B0%E1%BB%9Bi%20%C4%91%C3%A2y%20s%E1%BA%BD%20gi%E1%BA%A3i%20%C4%91%C3%A1p%20nh%E1%BB%AFng%20th%E1%BA%AFc%20m%E1%BA%AFc%20n%C3%A0y%20c%E1%BB%A7a%20%C4%91%E1%BB%99c%20gi%E1%BA%A3!',
	content:
		'%3Ch2%3E%3Cstrong%3ETh&ocirc;ng%20Tin%20T%E1%BB%95ng%20Quan%20D%E1%BB%B1%20&Aacute;n%20Empire%20City%3C/strong%3E%3C/h2%3E%0A%0A%3Cp%3EEmpire%20City%20l&agrave;%20khu%20ph%E1%BB%A9c%20h%E1%BB%A3p%20n%E1%BB%95i%20b%E1%BA%ADt%20t%E1%BA%A1i%20khu%20v%E1%BB%B1c%20Th%E1%BB%A7%20Thi&ecirc;m,&nbsp;%3Ca%20href=%22https://vi.wikipedia.org/wiki/Qu%25E1%25BA%25ADn_2,_Th%25C3%25A0nh_ph%25E1%25BB%2591_H%25E1%25BB%2593_Ch%25C3%25AD_Minh%22%20rel=%22nofollow%22%20target=%22_blank%22%3E%3Cstrong%3EQu%E1%BA%ADn%202%3C/strong%3E%3C/a%3E,%20TP.HCM.%20Empire%20City%20c&ugrave;ng%20v%E1%BB%9Bi%20The%20River%20Th%E1%BB%A7%20Thi&ecirc;m,%20The%20Metropole%20v&agrave;%20Eco%20Smart%20City%20%C4%91%C6%B0%E1%BB%A3c%20coi%20l&agrave;%20nh%E1%BB%AFng%20d%E1%BB%B1%20&aacute;n%20b%E1%BA%A5t%20%C4%91%E1%BB%99ng%20s%E1%BA%A3n%20&ldquo;t%E1%BB%A9%20tr%E1%BB%A5%20Th%E1%BB%A7%20Thi&ecirc;m&rdquo;,%20%C4%91&aacute;ng%20ch&uacute;%20&yacute;%20nh%E1%BA%A5t%20khu%20v%E1%BB%B1c%20%C4%91%E1%BA%AFt%20%C4%91%E1%BB%8F%20n&agrave;y.&nbsp;&nbsp;%3C/p%3E%0A%0A%3Cp%3E%3Ca%20href=%22https://batdongsan.com.vn/tin-thi-truong/chu-dau-tu-empire-city-cd-hcm-ar110414%22%20target=%22_blank%22%3E%3Cstrong%3ECh%E1%BB%A7%20%C4%91%E1%BA%A7u%20t%C6%B0%20Empire%20City%3C/strong%3E%3C/a%3E&nbsp;l&agrave;%20C&ocirc;ng%20ty%20Li&ecirc;n%20doanh%20Th&agrave;nh%20Ph%E1%BB%91%20%C4%90%E1%BA%BF%20V%C6%B0%C6%A1ng,%20v%E1%BB%9Bi%204%20th&agrave;nh%20vi&ecirc;n%20g&oacute;p%20v%E1%BB%91n%20l&agrave;:%20Ti%E1%BA%BFn%20Ph%C6%B0%E1%BB%9Bc,%20Keppel%20Land,%20Gaw%20Capital%20Partners%20v&agrave;%20Tr%E1%BA%A7n%20Th&aacute;i,%20%C4%91%E1%BB%81u%20l&agrave;%20nh%E1%BB%AFng%20t&ecirc;n%20tu%E1%BB%95i%20uy%20t&iacute;n%20trong%20ng&agrave;nh%20b%E1%BA%A5t%20%C4%91%E1%BB%99ng%20s%E1%BA%A3n.%3C/p%3E%0A%0A%3Cp%3ED%E1%BB%B1%20&aacute;n%20c&oacute;%20quy%20m&ocirc;%2014,5ha,%20g%E1%BB%93m%2011%20l&ocirc;%20%C4%91%C6%B0%E1%BB%A3c%20k&yacute;%20hi%E1%BB%87u%20t%E1%BB%AB%20MU1%20%C4%91%E1%BA%BFn%20MU11.%20Trong%20%C4%91&oacute;,%20%C4%91%E1%BA%A5t%20d&agrave;nh%20cho%20khu%20nh&agrave;%20%E1%BB%9F%20c&oacute;%208%20l&ocirc;,%203%20l&ocirc;%20c&ograve;n%20l%E1%BA%A1i%20l&agrave;%20%C4%91%E1%BA%A5t%20d&agrave;nh%20cho%20khu%20th%C6%B0%C6%A1ng%20m%E1%BA%A1i,%20v%C4%83n%20ph&ograve;ng.%20Theo%20quy%20ho%E1%BA%A1ch,%20n%E1%BB%95i%20b%E1%BA%ADt%20nh%E1%BA%A5t%20s%E1%BA%BD%20l&agrave;%20l&ocirc;%20MU1%20-%20t&ograve;a%20nh&agrave;%20cao%2088%20t%E1%BA%A7ng,%20d%E1%BB%B1%20ki%E1%BA%BFn%20sau%20khi%20ho&agrave;n%20th&agrave;nh%20s%E1%BA%BD%20tr%E1%BB%9F%20th&agrave;nh%20c&ocirc;ng%20tr&igrave;nh%20%C4%91i%E1%BB%83n%20nh%E1%BA%A5n%20c%E1%BB%A7a%20Empire%20City%20c%C5%A9ng%20nh%C6%B0%20to&agrave;n%20khu%20%C4%91&ocirc;%20th%E1%BB%8B%20m%E1%BB%9Bi%20Th%E1%BB%A7%20Thi&ecirc;m.&nbsp;%3C/p%3E%0A%0A%3Cp%3E%3Cimg%20alt=%22%22%20src=%22https://file4.batdongsan.com.vn/2022/12/28/akCJKkFO/20221228100902-867c.jpg%22%20/%3E%3C/p%3E%0A%0A%3Cp%3ES%E1%BA%A3n%20ph%E1%BA%A9m%20nh&agrave;%20%E1%BB%9F%20c%E1%BB%A7a%20d%E1%BB%B1%20&aacute;n%20Empire%20City%20Th%E1%BB%A7%20Thi&ecirc;m%20l&agrave;%20h%C6%A1n%203000%20c%C4%83n%20h%E1%BB%99%20cao%20c%E1%BA%A5p,%20%C4%91%C6%B0%E1%BB%A3c%20thi%E1%BA%BFt%20k%E1%BA%BF%20theo%20phong%20c&aacute;ch%20Singapore.%20%C4%90i%E1%BB%83m%20nh%E1%BA%A5n%20trong%20thi%E1%BA%BFt%20k%E1%BA%BF%20c%C4%83n%20h%E1%BB%99%20Empire%20City%20l&agrave;%20ban%20c&ocirc;ng%20v&agrave;%20ph&ograve;ng%20kh&aacute;ch%20l%E1%BB%9Bn,%20v%E1%BB%9Bi%20t%E1%BA%A7m%20view%20c%E1%BB%B1c%20tho&aacute;ng%20v%E1%BB%81%20ph&iacute;a%20Qu%E1%BA%ADn%201%20v&agrave;%20Qu%E1%BA%ADn%204.%3C/p%3E%0A%0A%3Ch2%3E%3Cstrong%3ETi%E1%BA%BFn%20%C4%90%E1%BB%99%20Empire%20City%20Th%E1%BB%A7%20Thi&ecirc;m%20Chi%20Ti%E1%BA%BFt%20T%E1%BB%ABng%20Ph&acirc;n%20Khu%3C/strong%3E%3C/h2%3E%0A%0A%3Cp%3ED%E1%BB%B1%20&aacute;n%20Empire%20City%20Th%E1%BB%A7%20Thi&ecirc;m%20%C4%91%C6%B0%E1%BB%A3c%20ch&iacute;nh%20th%E1%BB%A9c%20kh%E1%BB%9Fi%20c&ocirc;ng%20t%E1%BB%AB%20n%C4%83m%202016.%20%C4%90%E1%BA%BFn%20nay,%20sau%206%20n%C4%83m%20tri%E1%BB%83n%20khai,%20&ldquo;Th&agrave;nh%20ph%E1%BB%91%20%C4%90%E1%BA%BF%20V%C6%B0%C6%A1ng&rdquo;%20Empire%20City%20%C4%91&atilde;%20d%E1%BA%A7n%20th&agrave;nh%20h&igrave;nh.%20T&iacute;nh%20%C4%91%E1%BA%BFn%20cu%E1%BB%91i%20n%C4%83m%202022,%20d%E1%BB%B1%20&aacute;n%20Empire%20City%20Th%E1%BB%A7%20Thi&ecirc;m%20%C4%91&atilde;%20c&ocirc;ng%20b%E1%BB%91%20v&agrave;%20m%E1%BB%9F%20b&aacute;n%204%20ph&acirc;n%20khu%20c%C4%83n%20h%E1%BB%99:%20Linden%20Residences,%20Tilia%20Residences,%20Cove%20Residences%20v&agrave;%20Nara%20Residences.%20V%E1%BA%ADy&nbsp;%3Ca%20href=%22https://batdongsan.com.vn/tin-thi-truong/tien-do-empire-city-thu-thiem-cd-hcm-ar110417%22%20target=%22_blank%22%3E%3Cstrong%3Eti%E1%BA%BFn%20%C4%91%E1%BB%99%20Empire%20City%20Th%E1%BB%A7%20Thi&ecirc;m%3C/strong%3E%3C/a%3E&nbsp;%E1%BB%9F%20t%E1%BB%ABng%20ph&acirc;n%20khu%20hi%E1%BB%87n%20t%E1%BA%A1i%20ra%20sao?%3C/p%3E%0A%0A%3Ch2%3E%3Cstrong%3EPh&acirc;n%20khu%20Linden%20Residences%20(MU4)&nbsp;%3C/strong%3E%3C/h2%3E%0A%0A%3Cp%3ELinden%20Residences%20l&agrave;%20ph&acirc;n%20khu%20%C4%91%C6%B0%E1%BB%A3c%20m%E1%BB%9F%20b&aacute;n%20%C4%91%E1%BA%A7u%20ti&ecirc;n%20c%E1%BB%A7a%20d%E1%BB%B1%20&aacute;n%20Empire%20City.%20Ph&acirc;n%20khu%20n&agrave;y%20g%E1%BB%93m%204%20t&ograve;a,%20trong%20%C4%91&oacute;%202%20t&ograve;a%20cao%2034%20t%E1%BA%A7ng%20v&agrave;%202%20t&ograve;a%20cao%207%20t%E1%BA%A7ng,%20t%E1%BB%95ng%20c%E1%BB%99ng%20510%20c%C4%83n%20h%E1%BB%99.%20C&aacute;c%20c%C4%83n%20h%E1%BB%99%20%C4%91i%E1%BB%83n%20h&igrave;nh%20c&oacute;%20thi%E1%BA%BFt%20k%E1%BA%BF%201-3%20ph&ograve;ng%20ng%E1%BB%A7,%20di%E1%BB%87n%20t&iacute;ch%20dao%20%C4%91%E1%BB%99ng%20t%E1%BB%AB%2064-152m2,%20kh&ocirc;ng%20gian%20r%E1%BB%99ng,%20tho&aacute;ng.%20Gi&aacute;%20b&aacute;n%20c%C4%83n%20h%E1%BB%99%20Linden%20Residences%20t%E1%BA%A1i%20th%E1%BB%9Di%20%C4%91i%E1%BB%83m%20m%E1%BB%9F%20b&aacute;n%20n%C4%83m%202016&nbsp;dao%20%C4%91%E1%BB%99ng%20t%E1%BB%AB%2065%20-%2075%20tri%E1%BB%87u/m2.%3C/p%3E%0A%0A%3Cp%3EC&aacute;c%20c%C4%83n%20h%E1%BB%99%20Linden%20Residences%20%C4%91&atilde;%20ho&agrave;n%20th&agrave;nh%20v&agrave;%20b&agrave;n%20giao%20cho%20c%C6%B0%20d&acirc;n%20v&agrave;o%20%E1%BB%9F%20t%E1%BB%AB%20Qu&yacute;%202/2020.%3C/p%3E%0A%0A%3Cp%3E%3Cimg%20alt=%22%22%20src=%22https://file4.batdongsan.com.vn/2022/12/28/akCJKkFO/20221228024728-d20c.jpg%22%20/%3E%3C/p%3E%0A%0A%3Ch2%3E%3Cstrong%3EPh&acirc;n%20khu%20Tilia%20Residences%20(MU7)%3C/strong%3E%3C/h2%3E%0A%0A%3Cp%3E%C4%90%C6%B0%E1%BB%A3c%20gi%E1%BB%9Bi%20thi%E1%BB%87u%20n%C4%83m%202017,%20ph&acirc;n%20khu%20Tilia%20Residences%20g%E1%BB%93m%204%20t&ograve;a:%202%20t&ograve;a%20cao%2030%20t%E1%BA%A7ng%20v&agrave;%202%20t&ograve;a%20cao%207%20t%E1%BA%A7ng.%20Ph&acirc;n%20khu%20n&agrave;y%20c&oacute;%20480%20c%C4%83n%20h%E1%BB%99,%20di%E1%BB%87n%20t&iacute;ch%20g%E1%BA%A7n%20t%C6%B0%C6%A1ng%20t%E1%BB%B1%20nh%C6%B0%20c&aacute;c%20c%C4%83n%20t&ograve;a%20Linden.&nbsp;Gi&aacute;&nbsp;c%C4%83n%20h%E1%BB%99&nbsp;Tilia%20Residences%20t%E1%BA%A1i%20th%E1%BB%9Di%20%C4%91i%E1%BB%83m%20m%E1%BB%9F%20b&aacute;n%20n%C4%83m%202017&nbsp;trong%20kho%E1%BA%A3ng&nbsp;t%E1%BB%AB%2075%20-%2085%20tri%E1%BB%87u/m2.%3C/p%3E%0A%0A%3Cp%3EPh&acirc;n%20khu%20Tilia%20Residences%20%C4%91&atilde;%20%C4%91%C6%B0%E1%BB%A3c%20ho&agrave;n%20thi%E1%BB%87n%20v&agrave;%20b&agrave;n%20giao%20c%C4%83n%20h%E1%BB%99%20%C4%91%E1%BA%A7u%20n%C4%83m%202021.&nbsp;&nbsp;%3C/p%3E%0A%0A%3Cp%3E%3Cimg%20alt=%22%22%20src=%22https://file4.batdongsan.com.vn/2022/12/28/akCJKkFO/20221228102714-cf93.jpg%22%20/%3E%3C/p%3E%0A%0A%3Cp%3E%3Cimg%20alt=%22%22%20src=%22https://file4.batdongsan.com.vn/2022/12/28/akCJKkFO/20221228102715-33ac.jpg%22%20/%3E%3C/p%3E%0A%0A%3Ch2%3E%3Cstrong%3EPh&acirc;n%20khu%20Cove%20Residences%20(MU11)%3C/strong%3E%3C/h2%3E%0A%0A%3Cp%3ECove%20Residences%20g&acirc;y%20ch&uacute;%20&yacute;%20ngay%20t%E1%BB%AB%20khi%20ra%20m%E1%BA%AFt%20nh%E1%BB%9D%20s%E1%BB%91%20l%C6%B0%E1%BB%A3ng%20c%C4%83n%20h%E1%BB%99%20gi%E1%BB%9Bi%20h%E1%BA%A1n%20&ndash;%20ch%E1%BB%89%20136%20c%C4%83n%20%E1%BB%9F%202%20t&ograve;a%20th&aacute;p%20cao%2016%20t%E1%BA%A7ng.%20C%C4%83n%20h%E1%BB%99%20Cove%20Residence%20c&oacute;%20di%E1%BB%87n%20t&iacute;ch%20r%E1%BA%A5t%20l%E1%BB%9Bn.%20C%C4%83n%20nh%E1%BB%8F%20nh%E1%BA%A5t%20l&agrave;%20lo%E1%BA%A1i%202%20ph&ograve;ng%20ng%E1%BB%A7,%20di%E1%BB%87n%20t&iacute;ch%20101m2,%20l%E1%BB%9Bn%20nh%E1%BA%A5t%20l&agrave;%204%20ph&ograve;ng%20ng%E1%BB%A7,%20r%E1%BB%99ng%20218-228m2.%20Th&ecirc;m%20v&agrave;o%20%C4%91&oacute;,%20thi%E1%BA%BFt%20k%E1%BA%BF%20c%C4%83n%20h%E1%BB%99%20Cove%20Residences%20c&oacute;%20ban%20c&ocirc;ng%20g&oacute;c%20v&agrave;%20thang%20m&aacute;y%20ri&ecirc;ng%20c&agrave;ng%20t%E1%BA%A1o%20n&ecirc;n%20s%E1%BB%B1%20%C4%91%E1%BB%99c%20%C4%91&aacute;o,%20%C4%91%E1%BA%B7c%20quy%E1%BB%81n%20c%E1%BB%A7a%20ph&acirc;n%20khu%20n&agrave;y.%20Khi%20m%E1%BB%9F%20b&aacute;n%20v&agrave;o%20n%C4%83m%202018,%20gi&aacute;%20c%C4%83n%20h%E1%BB%99&nbsp;Cove%20Residences%20%E1%BB%9F%20m%E1%BB%A9c%20160-185%20tri%E1%BB%87u/m2.%3C/p%3E%0A%0A%3Cp%3EC%C4%83n%20h%E1%BB%99%20Cove%20Residences%20v%E1%BB%ABa%20%C4%91%C6%B0%E1%BB%A3c%20b&agrave;n%20giao%20Qu&yacute;%202/2022%20n&ecirc;n%20c&ograve;n%20r%E1%BA%A5t%20m%E1%BB%9Bi.%20Ti%E1%BB%87n%20&iacute;ch%20n%E1%BB%95i%20b%E1%BA%ADt%20nh%E1%BA%A5t%20c%E1%BB%A7a%20ph&acirc;n%20khu%20n&agrave;y%20ph%E1%BA%A3i%20k%E1%BB%83%20%C4%91%E1%BA%BFn%20h%E1%BB%93%20b%C6%A1i%20v%E1%BB%9Bi%20thi%E1%BA%BFt%20k%E1%BA%BF%20sang%20tr%E1%BB%8Dng,%20%C4%91%C6%B0%E1%BB%A3c%20coi%20l&agrave;%20n%C6%A1i%20l&yacute;%20t%C6%B0%E1%BB%9Fng%20ng%E1%BA%AFm%20c%E1%BA%A3nh%20S&agrave;i%20G&ograve;n%20hoa%20l%E1%BB%87%20v%E1%BB%81%20%C4%91&ecirc;m.&nbsp;%3C/p%3E%0A%0A%3Cp%3E&nbsp;%3C/p%3E%0A',
	time: Date.now(),
};
export const post: IPostInfo = {
	title: 'gấp căn hộ sắp bàn giao Q7 Riverside giá ưu đãi 1.85 tỷ',
	address:
		'Dự án Q7 Saigon Riverside, Đường Đào Trí, Phường Phú Thuận, Quận 7, Hồ Chí Minh',
	acreages: 66.66,
	prices: 2300,
	category: 'apartment',
	type: 'sell',
	content:
		'C%E1%BA%A7n%20sang%20nh%C6%B0%E1%BB%A3ng%20c%C4%83n%20h%E1%BB%99%20d%E1%BB%B1%20%C3%A1n%20Q7%20Riverside%20gi%C3%A1%20%C6%B0u%20%C4%91%C3%A3i%201.85%20t%E1%BB%B7.%0A*%20Thi%E1%BA%BFt%20k%E1%BA%BF%20c%C4%83n%20h%E1%BB%99%20Q7%20S%C3%A0i%20G%C3%B2n%20Riverside:%0A-%201PN%20+%20di%E1%BB%87n%20t%C3%ADch%2054m%C2%B2.%20Gi%C3%A1%20t%E1%BB%AB%201,850%20t%E1%BB%B7.%0A-%202PN,%20di%E1%BB%87n%20t%C3%ADch%2066.66m%20-%2069m%20-%2073m%C2%B2.%20Gi%C3%A1%20t%E1%BB%AB%202,3%20t%E1%BB%B7.%0A-%203PN,%20di%E1%BB%87n%20t%C3%ADch%2085m%C2%B2.%20Gi%C3%A1%20t%E1%BB%AB%203,6%20t%E1%BB%B7.%0AT%E1%BA%A5t%20c%E1%BA%A3%20c%C4%83n%20h%E1%BB%99%20%C4%91%E1%BB%81u%20c%C3%B3%20ban%20c%C3%B4ng%20v%C3%A0%20logia%20ri%C3%AAng%20bi%E1%BB%87t.%0ATh%C3%B4ng%20tin%20Q7%20S%C3%A0i%20G%C3%B2n%20Riverside:%0A+%20V%E1%BB%8B%20tr%C3%AD:%20S%E1%BB%91%204%20%C4%91%C6%B0%E1%BB%9Dng%20%C4%90%C3%A0o%20Tr%C3%AD,%20Ph%C6%B0%E1%BB%9Dng%20Ph%C3%BA%20Thu%E1%BA%ADn,%20Qu%E1%BA%ADn%207,%20TPHCM.%20V%E1%BB%9Bi%20v%E1%BB%8B%20th%E1%BA%BF%203%20m%E1%BA%B7t%20view%20s%C3%B4ng,%20li%E1%BB%81n%20k%E1%BB%81%20Ph%C3%BA%20M%E1%BB%B9%20H%C6%B0ng,%20Q7%20Saigon%20Riverside%20mang%20l%E1%BA%A1i%20s%E1%BB%B1%20sang%20tr%E1%BB%8Dng%20v%C3%A0%20an%20l%C3%A0nh%20cho%20c%C6%B0%20d%C3%A2n%20v%C3%A0%20l%C3%A0%20c%C4%83n%20h%E1%BB%99%20%C4%91%E1%BA%B3ng%20c%E1%BA%A5p%20nh%E1%BA%A5t%20c%E1%BB%A7a%20C%C4%90T%20H%C6%B0ng%20Th%E1%BB%8Bnh%20t%E1%BA%A1i%20Qu%E1%BA%ADn%207.%0A+%20Di%E1%BB%87n%20t%C3%ADch%20to%C3%A0n%20d%E1%BB%B1%20%C3%A1n%20Q7:%2075.224,5m%C2%B2.%0A+%20S%E1%BB%91%20block:%204.%0A+%20S%E1%BB%91%20t%E1%BA%A7ng:%2034%20t%E1%BA%A7ng.%0A+%20S%E1%BB%91%20c%C4%83n%20h%E1%BB%99:%203.580%20(04%20block%20Nh%C3%A0%20%E1%BB%9F%20th%C6%B0%C6%A1ng%20m%E1%BA%A1i,%20di%E1%BB%87n%20t%C3%ADch%20t%E1%BB%AB%2053,2m%20-%2086,69m%C2%B2).%0A+%20Ti%E1%BB%87n%20%C3%ADch:%204%20h%E1%BB%93%20b%C6%A1i%20l%E1%BB%9Bn%20nh%E1%BB%8F,%201%20h%E1%BB%93%20c%E1%BA%A3nh%20quan%20xuy%C3%AAn%20su%E1%BB%91t%204%20block,%20c%C3%B4ng%20vi%C3%AAn%20c%E1%BA%A3nh%20quan,%20v%C6%B0%E1%BB%9Dn%20BBQ,%202%20v%C6%B0%E1%BB%9Dn%20t%E1%BA%A3n%20b%E1%BB%99%20v%C3%A0%202%20khu%20vui%20ch%C6%A1i%20tr%E1%BA%BB%20em,%20qu%E1%BA%A3ng%20tr%C6%B0%E1%BB%9Dng%20t%E1%BB%95%20ch%E1%BB%A9c%20l%E1%BB%85%20cho%20c%C3%A1c%20b%C3%A9%20v%C3%A0%20c%C6%B0%20d%C3%A2n,%20ph%C3%B2ng%20gym,%20ph%C3%B2ng%20yoga,...',
	direction: 'northeast',
	facades: 3.2,
	ways: null,
	legal: 'saleContract',
	project: null,
	time: Date.now(),
	video: 'ECjMT-KDshs',
	contact: 'Minh Hân',
	phoneNumber: ['0984543251', '0337762980'],
	images: [
		'https://file4.batdongsan.com.vn/resize/1275x717/2021/12/27/20211227213320-a077_wm.jpg',
		'https://file4.batdongsan.com.vn/resize/1275x717/2021/12/27/20211227213320-ddf7_wm.jpg',
		'https://file4.batdongsan.com.vn/resize/1275x717/2021/12/27/20211227213320-8854_wm.jpg',
		'https://file4.batdongsan.com.vn/resize/1275x717/2021/12/27/20211227213320-0857_wm.jpg',
		'https://file4.batdongsan.com.vn/resize/1275x717/2021/12/27/20211227213320-4047_wm.jpg',
		'https://file4.batdongsan.com.vn/resize/1275x717/2021/12/27/20211227213320-88a9_wm.jpg',
	],
	link: 'https://batdongsan.com.vn/ban-can-ho-chung-cu-duong-dao-tri-phuong-phu-thuan-3-prj-q7-saigon-riverside/ban-gap-sap-ban-giao-gia-uu-dai-2-3-ty-lh-0968364060-pr34068833',
	coordinate: {
		latitude: 10.7254769,
		longitude: 106.7430562,
	},
};
export const myPost: IMyPostInfo = {
	title: 'gấp căn hộ sắp bàn giao Q7 Riverside giá ưu đãi 1.85 tỷ',
	acreages: 66.66,
	prices: 2300,
	category: 'apartment',
	type: 'sell',
	content:
		'C%E1%BA%A7n%20sang%20nh%C6%B0%E1%BB%A3ng%20c%C4%83n%20h%E1%BB%99%20d%E1%BB%B1%20%C3%A1n%20Q7%20Riverside%20gi%C3%A1%20%C6%B0u%20%C4%91%C3%A3i%201.85%20t%E1%BB%B7.%0A*%20Thi%E1%BA%BFt%20k%E1%BA%BF%20c%C4%83n%20h%E1%BB%99%20Q7%20S%C3%A0i%20G%C3%B2n%20Riverside:%0A-%201PN%20+%20di%E1%BB%87n%20t%C3%ADch%2054m%C2%B2.%20Gi%C3%A1%20t%E1%BB%AB%201,850%20t%E1%BB%B7.%0A-%202PN,%20di%E1%BB%87n%20t%C3%ADch%2066.66m%20-%2069m%20-%2073m%C2%B2.%20Gi%C3%A1%20t%E1%BB%AB%202,3%20t%E1%BB%B7.%0A-%203PN,%20di%E1%BB%87n%20t%C3%ADch%2085m%C2%B2.%20Gi%C3%A1%20t%E1%BB%AB%203,6%20t%E1%BB%B7.%0AT%E1%BA%A5t%20c%E1%BA%A3%20c%C4%83n%20h%E1%BB%99%20%C4%91%E1%BB%81u%20c%C3%B3%20ban%20c%C3%B4ng%20v%C3%A0%20logia%20ri%C3%AAng%20bi%E1%BB%87t.%0ATh%C3%B4ng%20tin%20Q7%20S%C3%A0i%20G%C3%B2n%20Riverside:%0A+%20V%E1%BB%8B%20tr%C3%AD:%20S%E1%BB%91%204%20%C4%91%C6%B0%E1%BB%9Dng%20%C4%90%C3%A0o%20Tr%C3%AD,%20Ph%C6%B0%E1%BB%9Dng%20Ph%C3%BA%20Thu%E1%BA%ADn,%20Qu%E1%BA%ADn%207,%20TPHCM.%20V%E1%BB%9Bi%20v%E1%BB%8B%20th%E1%BA%BF%203%20m%E1%BA%B7t%20view%20s%C3%B4ng,%20li%E1%BB%81n%20k%E1%BB%81%20Ph%C3%BA%20M%E1%BB%B9%20H%C6%B0ng,%20Q7%20Saigon%20Riverside%20mang%20l%E1%BA%A1i%20s%E1%BB%B1%20sang%20tr%E1%BB%8Dng%20v%C3%A0%20an%20l%C3%A0nh%20cho%20c%C6%B0%20d%C3%A2n%20v%C3%A0%20l%C3%A0%20c%C4%83n%20h%E1%BB%99%20%C4%91%E1%BA%B3ng%20c%E1%BA%A5p%20nh%E1%BA%A5t%20c%E1%BB%A7a%20C%C4%90T%20H%C6%B0ng%20Th%E1%BB%8Bnh%20t%E1%BA%A1i%20Qu%E1%BA%ADn%207.%0A+%20Di%E1%BB%87n%20t%C3%ADch%20to%C3%A0n%20d%E1%BB%B1%20%C3%A1n%20Q7:%2075.224,5m%C2%B2.%0A+%20S%E1%BB%91%20block:%204.%0A+%20S%E1%BB%91%20t%E1%BA%A7ng:%2034%20t%E1%BA%A7ng.%0A+%20S%E1%BB%91%20c%C4%83n%20h%E1%BB%99:%203.580%20(04%20block%20Nh%C3%A0%20%E1%BB%9F%20th%C6%B0%C6%A1ng%20m%E1%BA%A1i,%20di%E1%BB%87n%20t%C3%ADch%20t%E1%BB%AB%2053,2m%20-%2086,69m%C2%B2).%0A+%20Ti%E1%BB%87n%20%C3%ADch:%204%20h%E1%BB%93%20b%C6%A1i%20l%E1%BB%9Bn%20nh%E1%BB%8F,%201%20h%E1%BB%93%20c%E1%BA%A3nh%20quan%20xuy%C3%AAn%20su%E1%BB%91t%204%20block,%20c%C3%B4ng%20vi%C3%AAn%20c%E1%BA%A3nh%20quan,%20v%C6%B0%E1%BB%9Dn%20BBQ,%202%20v%C6%B0%E1%BB%9Dn%20t%E1%BA%A3n%20b%E1%BB%99%20v%C3%A0%202%20khu%20vui%20ch%C6%A1i%20tr%E1%BA%BB%20em,%20qu%E1%BA%A3ng%20tr%C6%B0%E1%BB%9Dng%20t%E1%BB%95%20ch%E1%BB%A9c%20l%E1%BB%85%20cho%20c%C3%A1c%20b%C3%A9%20v%C3%A0%20c%C6%B0%20d%C3%A2n,%20ph%C3%B2ng%20gym,%20ph%C3%B2ng%20yoga,...',
	direction: 'northeast',
	facades: 3.2,
	ways: null,
	legal: 'saleContract',
	project: null,
	video: 'ECjMT-KDshs',
	images: [
		'https://file4.batdongsan.com.vn/resize/1275x717/2021/12/27/20211227213320-a077_wm.jpg',
		'https://file4.batdongsan.com.vn/resize/1275x717/2021/12/27/20211227213320-ddf7_wm.jpg',
		'https://file4.batdongsan.com.vn/resize/1275x717/2021/12/27/20211227213320-8854_wm.jpg',
		'https://file4.batdongsan.com.vn/resize/1275x717/2021/12/27/20211227213320-0857_wm.jpg',
		'https://file4.batdongsan.com.vn/resize/1275x717/2021/12/27/20211227213320-4047_wm.jpg',
		'https://file4.batdongsan.com.vn/resize/1275x717/2021/12/27/20211227213320-88a9_wm.jpg',
	],
	location: {
		coordinate: {
			latitude: 10.7254769,
			longitude: 106.7430562,
		},
		address:
			'Dự án Q7 Saigon Riverside, Đường Đào Trí, Phường Phú Thuận, Quận 7, Hồ Chí Minh',
		region: 'HCM',
		district: '1',
		ward: '113',
	},
	poster: {
		name: 'Huy Hoàng',
		phoneNumber: ['0337762980'],
	},
	time: Date.now(),
};