<script lang="ts">
  import logo from './assets/svelte.png'
</script>

<main>
  <img src={logo} alt="Svelte Logo" />
  <h1>Under Construction</h1>

  <p>
    Welcome to CurDev.tech! I am undergoing a complete re-write of this site! I previously
    had a quick WordPress site. But as a software engineer I wanted to overhaul this myself 
    and create a website by scratch! Come back soon to see my site created with Svelte!
  </p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
