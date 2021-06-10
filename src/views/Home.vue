<template>
	<agile
		:nav-buttons="false"
		:autoplay-speed="5000"
		:speed="2500"
		fade="fade"
		pause-on-dots-hover="pause-on-dots-hover"
		autoplay="autoplay"
	>
		<div class="slide overflow-hidden h-screen w-screen">
			<img
				src="https://lh3.googleusercontent.com/gbA6K8lLLtRmG6sFB1HPGodhzV1mlBv166eZi1pl0xQXgLUqTrCfy-oXNllt4Cj3JqHd7v_8VSR7b7MeQWEaSbBl6mLxA_aj0NDpUdb6mZH2LeQhY_A3cjALQQY7U3Qi0gorZFfcVA=w2400"
				alt=""
				class="object-fill md:object-scale-down h-full hidden md:block"
			/>
			<img
				src="https://lh3.googleusercontent.com/uScP15lrjIt7NvfUNbUlEMfU51RQ15dVPaLH_KjAom7l7-5XnmGOwwXuYeEl1zmhKcR71jkZ-FpXszBHlLhYchOvOzmzPaIhoXqjxIVadwjqoFSHT2q1sLbYB6T23pwfkIoz3Y4O6g=w2400"
				alt=""
				class="object-cover pt-4 w-full h-full md:hidden"
			/>
		</div>

		<div class="slide bg-image3 overflow-hidden h-screen">
			<div class="text-center items-end flex justify-center h-full">
				<div class="text-3xl text-white font-bold p-5"></div>
			</div>
		</div>
	</agile>

	<div
		class="min-w-screen min-h-screen bg-primary-300 flex items-center p-5 lg:p-10 overflow-hidden relative"
	>
		<div
			class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-primary-800 relative md:text-left"
		>
			<div class="md:flex items-center -mx-10">
				<div class="w-full md:w-1/2 px-10 mb-5 md:mb-0">
					<div class="relative">
						<img
							src="https://i.pinimg.com/originals/90/72/3d/90723d9872091089447ba4cc6d6f092f.jpg"
							class="w-full relative z-10"
							alt=""
						/>
						<div
							class="border-4 border-primary-500 absolute top-10 bottom-10 left-10 right-10 z-0"
						></div>
					</div>
				</div>
				<div class="w-full md:w-1/2 px-10">
					<div class="mb-10">
						<h1 class="font-bold uppercase text-2xl mb-5">
							Hellobabes hair vitamin
						</h1>
						<span
							class="text-yellow-500 text-3xl md:text-5xl mt-2 font-black block"
						>
							700 bx left!!!
						</span>
					</div>
					<div class="">
						<span>
							Inspired by Korean's formulation, Hellobabes Hair
							Vitamin is a hair supplements revolution made in
							Malaysia. This hair vitamin provides better &
							healthy hair growth besides enhancing hair scalps to
							be redefine & moist. With the taste of candy
							berries, Hellobabes Hair Vitamin consists of 14
							sachets, consumable anytime & anywhere. Hair
							vitamins supplements that have botanical beverage
							Ingredients:
							<ul>
								<li>
									Mix berries
								</li>
								<li>
									Biotin
								</li>
								<li>
									Amla extract
								</li>
								<li>
									Acid folic Zinc
								</li>
								<li>
									Vitamin A ,Vitamin B, Vitamin G ,Vitamin D,
									Vitamin C, Vitamin E
								</li>
							</ul>
						</span>
					</div>
					<div>
						<div class="inline-block align-bottom mr-5">
							<span class="text-2xl leading-none align-baseline"
								>MYR</span
							>
							<span
								class="font-bold text-5xl leading-none align-baseline"
								>79</span
							>
							<span class="text-2xl leading-none align-baseline"
								>.00</span
							>
						</div>
						<div class="inline-block align-bottom">
							<div
								class="ecsp ecsp-SingleProduct-v2 ecsp-Product ec-Product-355318206 mdi mdi-cart -ml-2 mr-2 px-10 py-2"
								itemtype="http://schema.org/Product"
								data-single-product-id="355318206"
							>
								<div
									class="ecsp-title"
									itemprop="name"
									style="display:none;"
									content="Hellobabes hair vitamin"
								></div>
								<div customprop="addtobag"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<main class="w-full">
		<div class="relative ">
			<router-link to="/luckywinner">
				<div class="sliderAx h-5/6 px-2 py-5">
					<div id="slider-1" class="mx-auto">
						<div
							class="bg-cover bg-center bg-no-repeat md:h-screen  text-white py-24 md:object-fill object-fill object-center"
							style="background-image: url(https://lh3.googleusercontent.com/905j9pNEx6GgQXirhPXagnnNDtsiULLPIDENga-CXxMqWRKQMYnJc1oiQi8DUDRWtdSfYYBsNomsYxJsnDgLhimpVthlhp-eDCyu2hZF-RN8L3a8oBk82zbOQjzsqs-6HITOLhpMig=w2400)"
						></div>
						<!-- container -->
						<br />
					</div>
				</div>
				<div class="flex justify-between w-12 mx-auto pb-2">
					<button
						id="sButton1"
						onclick="sliderButton1()"
						class="bg-purple-400 rounded-full w-4 pb-2 "
					></button>
					<button
						id="sButton2"
						onclick="sliderButton2() "
						class="bg-purple-400 rounded-full w-4 p-2"
					></button>
				</div>
			</router-link>
		</div>
	</main>

	<section class="text-primary-500 body-font">
		<div class="container px-5 py-24 mx-auto flex flex-wrap">
			<div class="flex flex-wrap w-full">
				<div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
					<div class="flex relative pb-12">
						<div
							class="h-full w-10 absolute inset-0 flex items-center justify-center"
						>
							<div
								class="h-full w-1 bg-primary-200 pointer-events-none"
							></div>
						</div>
						<div
							class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 inline-flex items-center justify-center text-white relative z-10"
						>
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path
									d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
								></path>
							</svg>
						</div>
						<div class="flex-grow pl-4">
							<h2
								class="font-medium title-font text-sm text-primary-900 mb-1 tracking-wider"
							>
								Mix berries
							</h2>
							<p class="leading-relaxed">
								Berries are loaded with beneficial compounds and
								vitamins that may promote hair growth. This
								includes vitamin C, which has strong antioxidant
								properties. Antioxidants can help
								<stron class="text-primary-800 font-bold"
									>protect</stron
								>
								hair follicles against damage from harmful
								molecules called free radicals
							</p>
						</div>
					</div>
					<div class="flex relative pb-12">
						<div
							class="h-full w-10 absolute inset-0 flex items-center justify-center"
						>
							<div
								class="h-full w-1 bg-primary-200 pointer-events-none"
							></div>
						</div>
						<div
							class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 inline-flex items-center justify-center text-white relative z-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
								/>
							</svg>
						</div>
						<div class="flex-grow pl-4">
							<h2
								class="font-medium title-font text-sm text-primary-900 mb-1 tracking-wider"
							>
								Biotin
							</h2>
							<p class="leading-relaxed">
								stimulates keratin production in hair and can
								increase the rate of follicle growth. It is not
								stored for long in the body - most of yours is
								from the foods you eat. In order to be
								effective, it needs to be consumed.
							</p>
						</div>
					</div>
					<div class="flex relative pb-12">
						<div
							class="h-full w-10 absolute inset-0 flex items-center justify-center"
						>
							<div
								class="h-full w-1 bg-primary-200 pointer-events-none"
							></div>
						</div>
						<div
							class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 inline-flex items-center justify-center text-white relative z-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
								/>
							</svg>
						</div>
						<div class="flex-grow pl-4">
							<h2
								class="font-medium title-font text-sm text-primary-900 mb-1 tracking-wider"
							>
								Amla extract
							</h2>
							<p class="leading-relaxed">
								Amla or the Indian gooseberry can treat hair
								loss effectively. This edible fruit is
								considered as a miracle cure for hair care. It
								stimulates hair growth and improves the quality
								of hair. It contains calcium, which promotes
								healthier hair.
							</p>
						</div>
					</div>
					<div class="flex relative pb-12">
						<div
							class="h-full w-10 absolute inset-0 flex items-center justify-center"
						>
							<div
								class="h-full w-1 bg-primary-200 pointer-events-none"
							></div>
						</div>
						<div
							class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 inline-flex items-center justify-center text-white relative z-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
								/>
							</svg>
						</div>
						<div class="flex-grow pl-4">
							<h2
								class="font-medium title-font text-sm text-primary-900 mb-1 tracking-wider"
							>
								Acid Folic
							</h2>
							<p class="leading-relaxed">
								Stimulates hair growth, prevents premature
								primarying, and increases volume and shine in
								the hair.Prevents Hair Loss & Thickens Hair
							</p>
						</div>
					</div>
					<div class="flex relative">
						<div
							class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 inline-flex items-center justify-center text-white relative z-10"
						>
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
							</svg>
						</div>
						<div class="flex-grow pl-4">
							<h2
								class="font-medium title-font text-sm text-primary-900 mb-1 tracking-wider"
							>
								FINISH
							</h2>
							<p class="leading-relaxed">
								Maintaining your hair foor keep healthy and
								shiny
							</p>
						</div>
					</div>
				</div>
				<img
					class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
					src="https://i.pinimg.com/originals/be/f7/26/bef726e018dc09647b590cb2f912db6e.jpg"
					alt="step"
				/>
			</div>
		</div>
	</section>
	<section class="text-primary-600 body-font">
		<div class="container px-5 py-24 mx-auto flex flex-wrap">
			<div class="flex w-full mb-20 flex-wrap">
				<h1
					class="sm:text-3xl text-2xl font-medium title-font text-primary-900 lg:w-1/3 lg:mb-0 mb-4"
				>
					Follow us on social media.
				</h1>
				<p
					class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"
				></p>
			</div>
			<div class="flex flex-wrap md:-m-2 -m-1">
				<div class="flex flex-wrap w-1/2">
					<div class="md:p-2 p-1 w-1/2">
						<img
							alt="gallery"
							class="w-full object-cover h-full object-center block"
							src="https://i.pinimg.com/originals/e8/8c/d4/e88cd4bb1419cf221c539004d04c9e44.jpg"
						/>
					</div>
					<div class="md:p-2 p-1 w-1/2">
						<img
							alt="gallery"
							class="w-full object-cover h-full object-center block"
							src="https://i.pinimg.com/originals/81/b2/20/81b2205e44e8303014f01d5cec2de968.jpg"
						/>
					</div>
					<div class="md:p-2 p-1 w-full">
						<img
							alt="gallery"
							class="w-full h-full object-cover object-center block"
							src="https://i.pinimg.com/originals/67/4a/cf/674acf6a44bcb590438fd881e8355418.jpg"
						/>
					</div>
				</div>
				<div class="flex flex-wrap w-1/2">
					<div class="md:p-2 p-1 w-full">
						<img
							alt="gallery"
							class="w-full h-full object-cover object-center block"
							src="https://i.pinimg.com/originals/f9/f9/c8/f9f9c882330d93cba19702a90c8cfd93.jpg"
						/>
					</div>
					<div class="md:p-2 p-1 w-1/2">
						<img
							alt="gallery"
							class="w-full object-cover h-full object-center block"
							src="https://i.pinimg.com/originals/ab/51/bc/ab51bc6e48e2fe3c1ce7488fc7a15d93.jpg"
						/>
					</div>
					<div class="md:p-2 p-1 w-1/2">
						<img
							alt="gallery"
							class="w-full object-cover h-full object-center block"
							src="https://i.pinimg.com/originals/43/85/e8/4385e85b1fa32064a6dd73ead9128a21.jpg"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	// @ is an alias to /src
	import { VueAgile } from 'vue-agile'
	import CountDown from '@/components/CountDown'

	export default {
		name: 'Home',

		components: {
			agile: VueAgile,
			CountDown,
		},
		mounted() {
			document.title = 'Home | HelloBabes'
		},
	}
</script>
<style lang="scss">
	.bg-image {
		background: url(https://lh3.googleusercontent.com/gbA6K8lLLtRmG6sFB1HPGodhzV1mlBv166eZi1pl0xQXgLUqTrCfy-oXNllt4Cj3JqHd7v_8VSR7b7MeQWEaSbBl6mLxA_aj0NDpUdb6mZH2LeQhY_A3cjALQQY7U3Qi0gorZFfcVA=w2400);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
	.bg-image2 {
		background: url(https://i.pinimg.com/originals/87/26/e6/8726e64911a8a7709ec95e0c6d1d5c51.jpg);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 30%;
	}
	.bg-image3 {
		background: url(https://i.pinimg.com/originals/9f/cf/2c/9fcf2c15f54b375a347e872094174e4a.jpg);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 30%;
	}
	.agile__dots {
		bottom: 10px;
		flex-direction: column;
		right: 30px;
		position: absolute;
	}
	.agile__dot {
		margin: 5px 0;
	}
	.agile__dot button {
		background-color: transparent;
		border: 1px solid #f067a1;
		cursor: pointer;
		display: block;
		height: 10px;
		font-size: 0;
		line-height: 0;
		margin: 0;
		padding: 0;
		transition-duration: 0.3s;
		width: 10px;
	}
	.agile__dot--current button,
	.agile__dot:hover button {
		background-color: #f067a1;
	}
</style>
