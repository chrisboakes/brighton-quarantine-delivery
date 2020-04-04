<script>
    import CardsClass from '../classes/cards';
    import Card from './Card.svelte';
    import Filter from './Filter.svelte';

    export let content;
    export let urlFilter;

    export const cards = new CardsClass(content);
    export const categories = cards.getFilters();
    export let cardContent = cards.getContent();

    // When we update the filters list, update the content
    function filterData(event) {
        cardContent = cards.filterContent(event.detail);
    }

    // If we have URL params
    if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.has('filter')) {
            const urlFilterContent = urlParams.get('filter');
            urlFilter = urlFilterContent;
            cardContent = cards.filterContent(urlFilterContent);
        }
    }
</script>

<Filter on:updatefilter={filterData} filtered={urlFilter} filters={categories} />

{#each cardContent as item}
    <Card card={item} />
{/each}