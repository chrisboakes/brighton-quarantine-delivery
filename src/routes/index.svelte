<script>
	import Content from '../components/Content.svelte';

	export let data;
</script>

<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch('https://l4cgvdumqk.execute-api.eu-west-2.amazonaws.com/brighton-community/community-data')
		const data = await res.json();

		return {
			data: data
		}
	}
</script>

<Content content={data} />