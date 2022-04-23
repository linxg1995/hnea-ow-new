<template>
    <div>
        <header>
            <NavigationBar></NavigationBar>
        </header>
        <main>
            <nuxt />
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

export default {
    name: 'DefaultLayouts',
    components: {
        NavigationBar,
        Footer
    },
}
</script>

<style>
:root {
    --nav-height: 70px;
    --nav-height--m: 40px;
    --footer-height: 70px;
}
body {
    min-height: 100vh;
    font-family: "PingFang SC", "Microsoft Yahei", sans-serif;
    background: #f7f9fb;
    overflow-x: hidden;
}
</style>

<style lang="scss" scoped>
header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
}
main {
    min-height: calc(100vh - var(--footer-height));
    &::before {
        content: "";
        display: block;
        width: 100%;
        height: var(--nav-height);
    }
}
.footer {
    height: var(--footer-height);
}

@media screen and (max-width: 767.98px) {
    main::before {
        height: var(--nav-height--m);
    }
}
</style>
