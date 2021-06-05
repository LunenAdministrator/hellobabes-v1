<template>
	<div class="text-6xl text-center h-screen flex w-full items-center justify-center">
		<div class="w-60 h-30 mx-1 p-2 bg-white text-primary-400 rounded-lg">
			<div class="leading-none text-5xl" x-text="days">
				{{ displayDays }}
			</div>
			<div class="font-mono font-medium uppercase text-xl leading-none">
				Days
			</div>
		</div>
		<div class="w-60 h-30 mx-1 p-2 bg-white text-primary-400 rounded-lg">
			<div class="font-mono font-medium text-5xl leading-none" x-text="hours">
				{{ displayHours }}
			</div>
			<div class="font-mono font-medium uppercase text-xl leading-none">
				Hours
			</div>
		</div>
		<div class="w-60 h-30 mx-1 p-2 bg-white text-primary-400 rounded-lg">
			<div class="leading-none text-5xl" x-text="minutes">
				{{ displayMinutes }}
			</div>
			<div class="font-mono font-medium uppercase text-xl leading-none">
				Minutes
			</div>
		</div>
		<div class="w-60 h-30 mx-1 p-2 bg-white text-primary-400 rounded-lg">
			<div class="leading-none text-5xl" x-text="seconds">
				{{ displaySeconds }}
			</div>
			<div class="font-mono font-medium uppercase text-xl leading-none">
				Seconds
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CountDown',
		data() {
			return {
				displayDays: 0,
				displayHours: 0,
				displayMinutes: 0,
				displaySeconds: 0,
			}
		},
		computed: {
			_seconds: () => 1000,
			_minutes() {
				return this._seconds * 60
			},
			_hours() {
				return this._minutes * 60
			},
			_days() {
				return this._hours * 24
			},
		},
		mounted() {
			this.showRemaining()
		},
		methods: {
			formatNum: (num) => (num < 10 ? '0' + num : num),
			showRemaining() {
				const timer = setInterval(() => {
					const now = new Date()
					const end = new Date(2021, 5, 5, 12, 0, 0, 0)
					const distance = end.getTime() - now.getTime()

					if (distance < 0) {
						clearInterval(timer)
						return
					}

					const days = Math.floor(distance / this._days)
					const hours = Math.floor(
						(distance % this._days) / this._hours
					)
					const minutes = Math.floor(
						(distance % this._hours) / this._minutes
					)
					const seconds = Math.floor(
						(distance % this._minutes) / this._seconds
					)
					this.displayDays = this.formatNum(days)
					this.displayHours = this.formatNum(hours)
					this.displayMinutes = this.formatNum(minutes)
					this.displaySeconds = this.formatNum(seconds)
				}, 1000)
			},
		},
	}
</script>
