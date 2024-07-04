<script>
    import Logo from './logo-only.svg';
    import GitHub from './GitHub.svg';
</script>
<footer>
    <div class="copyright">
        <Logo width="60px" height="90px" style="margin-right: 20px;"/>
        <p>Marche & Cornellier © {new Date().getFullYear()}</p>
        <a class="gh" href="https://github.com/marr11317/escalade-laurentides" target="_blank" rel="noopener noreferrer">
            <GitHub width="1.3em" height="1.3em" />
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
