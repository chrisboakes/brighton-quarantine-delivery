<script>
    export let content;
</script>

<ul>
    {#each content as item}
		<li>
            <article>
                <header>
                    <h2>{item.name}</h2>
                </header>
            </article>
        </li>
	{/each}
</ul>