<template>
	<div>
		<div id="content-wrap">
			<div class="title-wrap">
				<h3>不要對我尖叫</h3>
				<h3>願景與使命</h3>
			</div>

			<div>
				<p class="title">合食顧問股份有限公司 願景</p>
				<p>為順應時代快速變遷及趨勢，合食餐飲顧問股份有限公司是全台灣唯一整合設計、餐飲、行銷、娛樂公司為一體之連鎖餐飲法人團體，未來能即時提供更全方垂直與水平整合之能力。</p>
			</div>

			<div>
				<p class="title">合食顧問股份有限公司 使命</p>
				<p>「合」有群體意識，意旨共伴一起；</p>
				<p>「食」除了吃這個動作外，也在意食材本身。</p>
				<p>合食也諧音雙手“合十”對於世間所有相遇、相識與過往或未來的衣足豐衣，時時念念感激、感恩之心。</p>
			</div>

			<div>
				<p class="title">商業道德與承諾</p>
				<p>合食餐飲顧問股份有限公司堅信，員工、與加盟主們皆是公司的事業夥伴，更是我們不可或缺的資源。我們持著敬業樂業的精神，全心投入，發揮出個人的潛能、實力，認同公司方向及不懈努力，並期待個人的心靈、專業操作上都保持隨時前進的速度。</p>
			</div>

			<div>
				<p>「不要對我尖叫」為全員共治，有機會共同參與決定，目標清楚，團結合作，秉承「體貼入心、自然、專業、親切」服務宗旨從經驗中自主學習，為客人創造“同理心”的服務。</p>
			</div>
		</div>

		<div id="focus-wrap">
			<p>關注我們</p>

			<nav>
				<a
					v-for="item in socialMedias"
          :key="item.name"
					:href="item.url"
					target="_blank"
				>
					<img
          :src="require(`@/assets/${item.image}`)"
          :alt="item.name">
				</a>
			</nav>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Culture',
	data() {
		return {
			socialMedias: [
        {
          name: 'facebook',
          image: 'facebook.webp',
					url: 'https://tw.yahoo.com/',
        },
        {
          name: 'instagram',
          image: 'instagram.webp',
					url: 'https://tw.yahoo.com/',
        },
      ],
		};
	}
}
</script>

<style lang="scss" scoped>
#content-wrap {
	margin: 0 auto;
	padding: 100px 0;
	color: rgb(48, 48, 48);
	width: 60%;
	text-align: left;

	.title-wrap {
		margin-bottom: 40px;
	}

	h3 {
		font-size: 28px;
		line-height: 1.35;
	}

	>div {
		margin-bottom: 28px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.title {
		margin-bottom: 28px;
		font-size: 16px;
		line-height: 1.4;
	}

	p {
		font-size: 14px;
		line-height: 2;
	}
}

#focus-wrap {
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-left: 15%;
	background: #d4d4d4;
	height: 213px;
	text-align: left;

	p {
		margin-bottom: 36px;
		font-size: 18px;
	}
}
</style>