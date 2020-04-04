<script>
export let filters;
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

let selected;

function updateFilter(event) {
    if (selected) {
        dispatch('updatefilter', selected);
    }
}
</script>

<style>
    .filters {
        grid-column: span 12;
    }

    .filters__label {
        color: var(--blue);
        font-family: var(--text-font);
        font-size: 1.4rem;
    }

    .filters__select {
        background-color: var(--grey);
        border: 1px solid var(--gold);
        font-family: var(--text-font);
        font-size: 1.4rem;
    }

    .filters__select:active,
    .filters__select:focus,
    .filters__select:hover {
        outline: none;
    }
</style>

<div class="filters">
    <label class="filters__label" for="categories">Filter by category:</label>

    <select bind:value={selected} class="filters__select" name="categories" on:change={updateFilter}>
        <option value="all">All</option>

        {#each filters as item}
            {#if item}
                <option value={item}>{item}</option>
            {/if}
        {/each}
    </select>
</div>