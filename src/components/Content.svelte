<script>
    import CardsClass from '../classes/cards';

    export let content;

    export let cards = new CardsClass(content);
</script>

<ul>
    {#each cards.getContent() as item}
		<li>
            <article>
                <header>
                    <h2>{item.name}</h2>
                </header>
                <ul>
                    {#if item.type}<li>Category: {item.type}</li>{/if}
                    {#if item.goods}<li>Goods: {item.goods}</li>{/if}
                    {#if item.location}<li>Location: {item.goods}</li>{/if}
                    {#if item.area}<li>Area: {item.area}</li>{/if}
                    {#if item.phone}<li>Phone: {item.phone}</li>{/if}
                    {#if item.website}<li>Website: <a href="{item.website}" target="_blank">{item.website}</a></li>{/if}
                </ul>
            </article>
        </li>
	{/each}
</ul>