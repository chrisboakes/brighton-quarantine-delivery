<script>
    export let card;
</script>

<style>
    .card {
        border: 1px solid var(--gold);
        border-radius: 20px;
        color: var(--blue);
        grid-column: span 12;
        padding: 15px 20px;
    }

    @media (min-width: 480px) {
        .card {
            grid-column: span 6;
        }
    }

    @media (min-width: 1024px) {
        .card {
            grid-column: span 4;
        }
    }

    @media (min-width: 1280px) {
        .card {
            grid-column: span 3;
        }
    }

    .card__title {
        font-family: var(--title-font);
        margin-bottom: 5px;
        text-align: center;
        text-transform: uppercase;
    }

    .card-item {
        display: flex;
        margin-top: 10px;
    }

    .card-item__link {
        display: flex;
        text-decoration: none;
    }

    .card-item__link:hover .card-item__text {
        text-decoration: underline;
    }

    .card-item__icon {
        fill: var(--gold);
        height: 20px;
        min-width: 20px;
        width: 20px;
    }

    .card-item__icon--category {
        height: 20px;
    }

    .card-item__text {
        font-size: 1.4rem;
        margin-left: 10px;
        word-break: break-word;
    }
</style>

<article class="card">
    {#if card.name}
        <header>
            <h2 class="card__title">{card.name}</h2>
        </header>
        <ul>
            {#if card.type}
                <li class="card-item">
                    <svg class="card-item__icon card-item__icon--category">
                        <title>Category Icon</title>
                        <use xlink:href="#shape-type"></use>
                    </svg>
                    <span class="card-item__text">
                        {card.type}
                    </span>
                </li>
            {/if}

            {#if card.location}
                <li class="card-item">
                    <svg class="card-item__icon card-item__icon--location">
                        <title>Location Icon</title>
                        <use xlink:href="#shape-location"></use>
                    </svg>
                    <span class="card-item__text">
                        {card.location}
                    </span>
                </li>
            {/if}

            {#if card.phone}
                <li class="card-item">
                    <a class="card-item__link" href="tel:{card.phone}" target="_blank" aria-label="Phone {card.name}" rel="noopener nofollow">
                        <svg class="card-item__icon card-item__icon--phone">
                            <title>Phone Icon</title>
                            <use xlink:href="#shape-phone"></use>
                        </svg>
                        <span class="card-item__text">
                            {card.phone}
                        </span>
                    </a>
                </li>
            {/if}

            {#if card.website}
                <li class="card-item">
                    <a class="card-item__link" href={card.website.link} target="_blank" aria-label="Visit website for {card.name}" rel="noopener nofollow">
                        <svg class="card-item__icon card-item__icon--website">
                            <title>Website Icon</title>
                            <use xlink:href="#shape-website"></use>
                        </svg>
                        <span class="card-item__text">
                            {card.website.readableLink}
                        </span>
                    </a>
                </li>
            {/if}

            {#if card.email}
                 <li class="card-item">
                    <a class="card-item__link" href={card.email.link} aria-label="Email {card.name}" rel="noopener nofollow">
                        <svg class="card-item__icon card-item__icon--info">
                            <title>Email Icon</title>
                            <use xlink:href="#shape-e-mail"></use>
                        </svg>
                        <span class="card-item__text">
                            {card.email.readableLink}
                        </span>
                    </a>
                </li>
            {/if}

            {#if card.goods}
                <li class="card-item">
                    <svg class="card-item__icon card-item__icon--info">
                        <title>Info Icon</title>
                        <use xlink:href="#shape-info"></use>
                    </svg>
                    <span class="card-item__text">
                        {card.goods}
                    </span>
                </li>
            {/if}
        </ul>
    {/if}
</article>