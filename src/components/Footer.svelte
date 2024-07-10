<script>
    import Logo from './logo.svg';
</script>
<footer>
    <div class="copyright">
        <Logo alt="logo" height="90px" style="margin-right: 20px;"/>
        <p>Marche & Cornellier © {new Date().getFullYear()}</p>
        <a class="gh" href="https://github.com/ecstrema/parois-du-quebec" target="_blank" rel="noopener noreferrer">
            <svg width="1.3em" height="1.3em" viewBox="0 0 24 24">
                <path
                    fill="none"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
                />
            </svg>
        </a>
    </div>
</footer>

<style>
    .copyright {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .gh {
        margin-left: 10px;
        stroke: rgb(129, 129, 129);
        transition: stroke 0.2s ease;

        cursor: pointer;
        text-decoration: none;

        margin-bottom: -3px;
    }
    .gh:hover, .gh:focus{
        stroke: rgb(244, 188, 81);
    }

    footer {
        font-size: 14px;
        color: rgb(129, 129, 129);
        text-align: center;
        flex-shrink: 0;
        background-color: #ffffff;
        padding-bottom: 20px;
    }
</style>
