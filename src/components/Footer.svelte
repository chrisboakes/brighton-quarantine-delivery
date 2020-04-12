<style>
    .footer {
		margin: 20px 10px;
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 768px) {
		.footer {
            flex-direction: row;
            justify-content: space-between;
            margin: 20px 16px;
		}
    }
    
    .footer-item {
        font-size: 1.4rem;
        color: var(--blue);
    }

    .footer-item a:hover {
        color: var(--gold);
    }
</style>

<footer>
    <ul class="footer">
        <li class="footer-item">Open source code from <a href="https://github.com/chrisboakes/brighton-quarantine-delivery" target="_blank" rel="noopener nofollow">here</a></li>
        <li class="footer-item">Data by Jo from
            <a href="https://www.co-women.org/" rel="noopener nofollow" target="_blank">
                Co-Women
            </a>
        </li>
        <li class="footer-item">For content modifications 
            <a href="https://forms.gle/eKefMigQKut3cxq27 " target="_blank" aria-label="Modify content form" rel="noopener nofollow">
                click here
            </a>
        </li>
    </ul>
</footer>