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
        <li class="footer-item">Built by <a href="https://chrisboakes.com/" target="_blank" rel="noopener nofollow">Chris Boakes</a></li>
        <li class="footer-item">Data by Jo from
            <a href="https://www.co-women.org/" rel="noopener nofollow" target="_blank">
                Co-Women
            </a>
        </li>
        <li class="footer-item">Visit the 
            <a href="https://www.facebook.com/groups/1558345741007742/" target="_blank" aria-label="Visit the Facebook group" rel="noopener nofollow">
                Facebook Group
            </a>
        </li>
    </ul>
</footer>