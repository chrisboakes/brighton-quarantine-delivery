<script>
    import CardsClass from '../classes/cards';
    import Card from './Card.svelte';
    import Filter from './Filter.svelte';

    export let content;

    export const cards = new CardsClass(content);
    export const categories = cards.getFilters();
</script>

<Filter filters={categories} />

{#each cards.getContent() as item}
    <Card card={item} />
{/each}