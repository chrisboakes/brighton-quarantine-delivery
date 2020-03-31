<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<style>
	.container {
		margin: 0 auto;
		max-width: 1440px;
		position: relative;
	}

	.grid {
		display: grid;
		flex-wrap: nowrap;
		grid-gap: 16px;
		grid-template-columns: repeat(12, 1fr);
		margin: 10px;
	}

	@media (min-width: 768px) {
		.grid {
			margin: 10px 16px;
		}
	}

	.header-wrapper {
		padding: 25px 0 20px 0;
	}

	@media (min-width: 768px) {
		.header-wrapper {
			padding: 20px 0 30px 0;
		}
	}

	main {
		box-sizing: border-box;
	}
</style>

<div class="container">
	<div class="grid header-wrapper">
		<Header />
	</div>

	<main class="grid">
		<slot></slot>
	</main>

	<Footer />
</div>