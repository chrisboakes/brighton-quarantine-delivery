<script>
export let filters;

// Process client-side logic
if (process.browser) {
    console.log('BROWSER');
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

    <select class="filters__select" name="categories" data-js="categories">
        <option value="all">All</option>

        {#each filters as item}
            <option value={item}>{item}</option>
        {/each}
    </select>
</div>