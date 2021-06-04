<template>
	<div></div>
</template>

<script>
	import { VueAgile } from 'vue-agile'
	export default {
		name: 'Hero',
		data() {
			return {
				myOptions: {
					navButtons: false,

					responsive: [
						{
							breakpoint: 600,
							settings: {
								dots: false,
							},
						},

						{
							breakpoint: 900,
							settings: {
								navButtons: true,
								dots: true,
								infinite: false,
							},
						},
					],
				},
			}
		},
	}
</script>

<style lang="scss" scoped></style>
