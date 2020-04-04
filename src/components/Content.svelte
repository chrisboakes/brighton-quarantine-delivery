<script>
    import CardsClass from '../classes/cards';
    import Card from './Card.svelte';
    import Filter from './Filter.svelte';

    export let content;

    export const cards = new CardsClass(content);
    export const categories = cards.getFilters();
    export let cardContent = cards.getContent();

    // When we update the filters list, update the content
    function filterData(event) {
        cardContent = cards.filterContent(event.detail);
    }
</script>

<Filter on:updatefilter={filterData} filters={categories} />

{#each cardContent as item}
    <Card card={item} />
{/each}