<script>
	import Content from '../components/Content.svelte';

	export let data;
</script>

<script context="module">
	export async function preload({ params, query }) {
		// Update with your endpoint
		const endpoint = ''
		const res = await this.fetch(endpoint)
		const data = await res.json()

		return {
			data: data
		}
	}
</script>

<Content content={data} />