<template>
	<div id="container">
		<nav id="lists">
			<li
				v-for="item in countryLists"
				:key="item.id"
				@click="changeCountry(item.country)"
			>
				{{item.country}}
			</li>
		</nav>

		<section id="stores">
			<div
				v-for="item in filterStores()"
				:key="item.id"
				class="card"
			>
				<img
					:src="item.image"
					:alt="item.name"
				>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'Store',
	data() {
		return {
			currentCountry: '台灣',
			countryLists: [
				{
					id: 1, 
					country: '台灣',
					stores: [
						{
							name: '台北內湖 瑞光店1',
							address: '台北市內湖區瑞光路517號1樓',
							phone: '02 2753 5531',
							location: [25.0791573, 121.5672835],
							image: 'https://static.wixstatic.com/media/f73548_82e182967d5c4a07b8556d9002958ceb~mv2.jpg/v1/crop/x_0,y_48,w_1108,h_1382/fill/w_622,h_776,al_c,q_85,usm_0.66_1.00_0.01/S__165920822.webp',
						},
						{
							name: '台北 中山店',
							address: '台北市中山區中山北路二段16巷9號',
							phone: '02 2521 1050',
							location: [25.0531535, 121.5194149],
							image: 'https://static.wixstatic.com/media/f73548_94309a059d8444b785281ee0653c93bd~mv2_d_4944_3296_s_4_2.jpg/v1/crop/x_1151,y_0,w_2642,h_3296/fill/w_622,h_776,al_c,q_85,usm_0.66_1.00_0.01/IMG_8694.webp'
						}
					]
				},
				{
					id: 2, 
					country: '大陸',
					stores: [
						{
							name: '台北內湖 瑞光店2',
							address: '台北市內湖區瑞光路517號1樓',
							phone: '02 2753 5531',
							location: [25.0791573, 121.5672835],
							image: 'https://static.wixstatic.com/media/f73548_82e182967d5c4a07b8556d9002958ceb~mv2.jpg/v1/crop/x_0,y_48,w_1108,h_1382/fill/w_622,h_776,al_c,q_85,usm_0.66_1.00_0.01/S__165920822.webp',
						},
						{
							name: '台北 中山店',
							address: '台北市中山區中山北路二段16巷9號',
							phone: '02 2521 1050',
							location: [25.0531535, 121.5194149],
							image: 'https://static.wixstatic.com/media/f73548_94309a059d8444b785281ee0653c93bd~mv2_d_4944_3296_s_4_2.jpg/v1/crop/x_1151,y_0,w_2642,h_3296/fill/w_622,h_776,al_c,q_85,usm_0.66_1.00_0.01/IMG_8694.webp'
						}
					]
				},
				{
					id: 3, 
					country: '香港',
					stores: [
						{
							name: '台北內湖 瑞光店3',
							address: '台北市內湖區瑞光路517號1樓',
							phone: '02 2753 5531',
							location: [25.0791573, 121.5672835],
							image: 'https://static.wixstatic.com/media/f73548_82e182967d5c4a07b8556d9002958ceb~mv2.jpg/v1/crop/x_0,y_48,w_1108,h_1382/fill/w_622,h_776,al_c,q_85,usm_0.66_1.00_0.01/S__165920822.webp',
						},
						{
							name: '台北 中山店',
							address: '台北市中山區中山北路二段16巷9號',
							phone: '02 2521 1050',
							location: [25.0531535, 121.5194149],
							image: 'https://static.wixstatic.com/media/f73548_94309a059d8444b785281ee0653c93bd~mv2_d_4944_3296_s_4_2.jpg/v1/crop/x_1151,y_0,w_2642,h_3296/fill/w_622,h_776,al_c,q_85,usm_0.66_1.00_0.01/IMG_8694.webp'
						}
					]
				},
				{
					id: 4, 
					country: '日本',
					stores: [
						{
							name: '台北內湖 瑞光店4',
							address: '台北市內湖區瑞光路517號1樓',
							phone: '02 2753 5531',
							location: [25.0791573, 121.5672835],
							image: 'https://static.wixstatic.com/media/f73548_82e182967d5c4a07b8556d9002958ceb~mv2.jpg/v1/crop/x_0,y_48,w_1108,h_1382/fill/w_622,h_776,al_c,q_85,usm_0.66_1.00_0.01/S__165920822.webp',
						},
						{
							name: '台北 中山店',
							address: '台北市中山區中山北路二段16巷9號',
							phone: '02 2521 1050',
							location: [25.0531535, 121.5194149],
							image: 'https://static.wixstatic.com/media/f73548_94309a059d8444b785281ee0653c93bd~mv2_d_4944_3296_s_4_2.jpg/v1/crop/x_1151,y_0,w_2642,h_3296/fill/w_622,h_776,al_c,q_85,usm_0.66_1.00_0.01/IMG_8694.webp'
						}
					]
				},
				{
					id: 5, 
					country: '馬來西亞',
					stores: [
						{
							name: '台北內湖 瑞光店5',
							address: '台北市內湖區瑞光路517號1樓',
							phone: '02 2753 5531',
							location: [25.0791573, 121.5672835],
							image: 'https://static.wixstatic.com/media/f73548_82e182967d5c4a07b8556d9002958ceb~mv2.jpg/v1/crop/x_0,y_48,w_1108,h_1382/fill/w_622,h_776,al_c,q_85,usm_0.66_1.00_0.01/S__165920822.webp',
						},
						{
							name: '台北 中山店',
							address: '台北市中山區中山北路二段16巷9號',
							phone: '02 2521 1050',
							location: [25.0531535, 121.5194149],
							image: 'https://static.wixstatic.com/media/f73548_94309a059d8444b785281ee0653c93bd~mv2_d_4944_3296_s_4_2.jpg/v1/crop/x_1151,y_0,w_2642,h_3296/fill/w_622,h_776,al_c,q_85,usm_0.66_1.00_0.01/IMG_8694.webp'
						}
					]
				},
				{
					id: 6, 
					country: '加拿大',
					stores: [
						{
							name: '台北內湖 瑞光店6',
							address: '台北市內湖區瑞光路517號1樓',
							phone: '02 2753 5531',
							location: [25.0791573, 121.5672835],
							image: 'https://static.wixstatic.com/media/f73548_82e182967d5c4a07b8556d9002958ceb~mv2.jpg/v1/crop/x_0,y_48,w_1108,h_1382/fill/w_622,h_776,al_c,q_85,usm_0.66_1.00_0.01/S__165920822.webp',
						},
						{
							name: '台北 中山店',
							address: '台北市中山區中山北路二段16巷9號',
							phone: '02 2521 1050',
							location: [25.0531535, 121.5194149],
							image: 'https://static.wixstatic.com/media/f73548_94309a059d8444b785281ee0653c93bd~mv2_d_4944_3296_s_4_2.jpg/v1/crop/x_1151,y_0,w_2642,h_3296/fill/w_622,h_776,al_c,q_85,usm_0.66_1.00_0.01/IMG_8694.webp'
						}
					]
				},
				{
					id: 7, 
					country: '美國',
					stores: [
						{
							name: '台北內湖 瑞光店7',
							address: '台北市內湖區瑞光路517號1樓',
							phone: '02 2753 5531',
							location: [25.0791573, 121.5672835],
							image: 'https://static.wixstatic.com/media/f73548_82e182967d5c4a07b8556d9002958ceb~mv2.jpg/v1/crop/x_0,y_48,w_1108,h_1382/fill/w_622,h_776,al_c,q_85,usm_0.66_1.00_0.01/S__165920822.webp',
						},
						{
							name: '台北 中山店',
							address: '台北市中山區中山北路二段16巷9號',
							phone: '02 2521 1050',
							location: [25.0531535, 121.5194149],
							image: 'https://static.wixstatic.com/media/f73548_94309a059d8444b785281ee0653c93bd~mv2_d_4944_3296_s_4_2.jpg/v1/crop/x_1151,y_0,w_2642,h_3296/fill/w_622,h_776,al_c,q_85,usm_0.66_1.00_0.01/IMG_8694.webp'
						}
					]
				}
			],
		};
	},
	methods: {
		changeCountry(country) {
			this.currentCountry = country;
		},
		filterStores() {
			const currentStores = this.countryLists.find(e => e.country === this.currentCountry);

			return currentStores.stores;
		},
	}
}
</script>

<style lang="scss" scoped>
li {
	list-style: none;
}

#container {
	#lists {
		display: flex;
		justify-content: center;
		padding: 80px 0;

		li {
			cursor: pointer;
			padding: 3px 32px;
			color: #594e48;
			transition: color .4s ease;

			&:hover {
				color: #dfd7cc;
			}
		}
	}
}
</style>