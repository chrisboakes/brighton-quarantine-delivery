<script>
	import Header from '../components/Header.svelte';
</script>

<style>
	.container {
		margin: 0 auto;
		max-width: 1280px;
	}
	.grid {
		display: grid;
		flex-wrap: nowrap;
		grid-gap: 16px;
		grid-template-columns: repeat(12, 1fr);
		margin: 10px;
	}

	.header-wrapper {
		padding: 20px 0 20px 0;
	}

	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
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
</div>