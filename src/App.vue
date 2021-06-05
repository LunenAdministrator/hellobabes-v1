<template>
	<div class="w-full h-full">
		<nav class="w-full mx-auto bg-secondary-500 fixed z-20">
			<div
				class="container  px-6 h-16 flex items-center justify-between mx-auto"
			>
				<div class="flex items-center">
					<div
						class="rounded-full relative p-3 flex justify-end text-primary-600 font-thin"
					>
						<input
							type="text"
							class="bg-transparent focus:outline-none text-xs w-0 transition duration-150 ease-in-out absolute left-0 ml-10"
							placeholder="Type something..."
						/>
						<svg
							@click="searchHandler($event)"
							:xmlns="xmlns"
							class="cursor-pointer icon icon-tabler icon-tabler-search"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z"></path>
							<circle cx="10" cy="10" r="7"></circle>
							<line x1="21" y1="21" x2="15" y2="15"></line>
						</svg>
					</div>
				</div>
				<ul
					class="flex items-center text-primary-700 font-medium text-normal justify-center h-full z-100"
				>
					<router-link
						to="/"
						class="cursor-pointer h-full xl:flex items-center tracking-normal hidden bg-opacity-100 hover:text-white"
					>
						Home
					</router-link>
					<router-link
						to="/luckywinner"
						class="cursor-pointer h-full xl:flex items-center xl:ml-10 tracking-normal hidden relative"
					>
						Promotion's
					</router-link>
					<li class="mx-0 xl:mx-12 cursor-pointer">
						<img
							class="h-20 w-20"
							src="https://i.pinimg.com/originals/36/68/29/366829140ec2b01747e15deea330fadf.png"
						/>
					</li>
					<router-link
						to="/faq"
						class="hover:text-white cursor-pointer h-full xl:flex items-center mr-10 tracking-normal hidden"
					>
						What's new ?
					</router-link>
					<router-link
						to="/about"
						class="ec-cart-widget hover:text-white cursor-pointer h-full xl:flex items-center tracking-normal hidden"
					>
						About us
					</router-link>
				</ul>
				<div
					aria-haspopup="true"
					class="cursor-pointer h-full xl:flex items-center justify-end hidden relative text-primary-800"
					@click="dropdownHandler($event)"
				></div>
				<div
					class="visible xl:hidden flex items-center text-primary-700 font-medium text-normal  "
				>
					<ul
						class="p-2 border-r bg-primary-400 absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden"
					>
						<li
							class="flex xl:hidden cursor-pointer text-primary-600 text-base leading-3 tracking-normal mt-2 py-3 focus:outline-none"
						>
							<div class="flex items-center">
								<router-link
									to="/"
									class="leading-6 ml-2 font-bold"
								>
									Home
								</router-link>
							</div>
						</li>
						<li
							class="xl:hidden flex-col cursor-pointer text-primary-600 text-base leading-3 tracking-normal py-3 focus:outline-none flex justify-center"
						>
							<div class="flex items-center">
								<router-link
									to="/luckywinner"
									class="leading-6 ml-2 font-bold"
								>
									Promotion's
								</router-link>
							</div>
						</li>
						<li
							class="xl:hidden cursor-pointer text-primary-600 text-base leading-3 tracking-normal py-3 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
						>
							<router-link
								to="/faq"
								class="leading-6 ml-2 font-bold"
							>
								What's New ?
							</router-link>
						</li>
						<li
							class="xl:hidden cursor-pointer text-primary-600 text-base leading-3 tracking-normal mb-2 py-3 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
						>
							<router-link
								to="/about"
								class="leading-6 ml-2 font-bold"
							>
								About us
							</router-link>
						</li>
					</ul>
					<svg
						@click="MenuHandler($event, true)"
						aria-haspopup="true"
						aria-label="Main Menu"
						:xmlns="xmlns"
						class="show-m-menu icon icon-tabler icon-tabler-menu"
						width="28"
						height="28"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#ffffff"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z"></path>
						<line x1="4" y1="8" x2="20" y2="8"></line>
						<line x1="4" y1="16" x2="20" y2="16"></line>
					</svg>
					<div
						class="hidden close-m-menu"
						@click="MenuHandler($event, false)"
					>
						<svg
							aria-label="Close"
							:xmlns="xmlns"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="#ffffff"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" />
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</div>
				</div>
			</div>
		</nav>

		<router-view />
		<footer class="text-primary-700 bg-secondary-500 body-font">
			<div
				class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
			>
				<a
					class="flex title-font font-medium items-center md:justify-start justify-center text-primary-900"
				>
					<span class="ml-3 text-xl">Hellobabes</span>
				</a>
				<p
					class="text-sm text-primary-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-primary-200 sm:py-2 sm:mt-0 mt-4"
				>
					© 2021 hellobabes —
					<a
						href="https://twitter.com/knyttneve"
						class="text-primary-600 ml-1"
						rel="noopener noreferrer"
						target="_blank"
						>@store</a
					>
				</p>
				<span
					class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
				>
					<a class="text-primary-500">
						<svg
							fill="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<path
								d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
							></path>
						</svg>
					</a>
					<a class="ml-3 text-primary-500">
						<svg
							fill="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<path
								d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
							></path>
						</svg>
					</a>
					<a class="ml-3 text-primary-500">
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<rect
								width="20"
								height="20"
								x="2"
								y="2"
								rx="5"
								ry="5"
							></rect>
							<path
								d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
							></path>
						</svg>
					</a>
					<a class="ml-3 text-primary-500">
						<svg
							fill="currentColor"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="0"
							class="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<path
								stroke="none"
								d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
							></path>
							<circle cx="4" cy="4" r="2" stroke="none"></circle>
						</svg>
					</a>
				</span>
			</div>
		</footer>
	</div>
</template>
<script>
	import CountDown from '@/components/CountDown'

	export default {
		components: {
			CountDown,
		},
		data() {
			return {}
		},
		methods: {
			dropdownHandler(event) {
				let single = event.currentTarget.getElementsByTagName('ul')[0]
				single.classList.toggle('hidden')
			},
			MenuHandler(el, val) {
				let MainList = el.currentTarget.parentElement.getElementsByTagName(
					'ul'
				)[0]
				let closeIcon = el.currentTarget.parentElement.getElementsByClassName(
					'close-m-menu'
				)[0]
				let showIcon = el.currentTarget.parentElement.getElementsByClassName(
					'show-m-menu'
				)[0]
				if (val) {
					MainList.classList.remove('hidden')
					el.currentTarget.classList.add('hidden')
					closeIcon.classList.remove('hidden')
				} else {
					showIcon.classList.remove('hidden')
					MainList.classList.add('hidden')
					el.currentTarget.classList.add('hidden')
				}
			},
			searchHandler(event) {
				let Input = event.currentTarget.parentElement.getElementsByTagName(
					'input'
				)[0]
				Input.classList.toggle('w-0')
				Input.classList.toggle('w-24')
			},
		},
	}
</script>

<style lang="scss"></style>
