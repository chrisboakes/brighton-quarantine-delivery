<script>
    import CardsClass from '../classes/cards';
    import Card from './Card.svelte';

    export let content;

    export let cards = new CardsClass(content);
</script>

{#each cards.getContent() as item}
    <Card card={item} />
{/each}