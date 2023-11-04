<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.pages.edges[0].node.title }}</g-link>
      </strong>
    </header>
    <main>
            <nav>
                <div class="links">
                    <div v-for="edge in $static.pages.edges" :key="edge.node.id">
                        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
                        <h2></h2>
                    </div>
                </div>
            </nav>
            <article>
              <slot></slot>
            </article>
        </main>
  </div>
</template>

<static-query>
  {
    pages: allPaligoPage {
        edges {
            node {
                id,
                path,
                title,
            }
        }
    }
  }
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  padding: 50px;
}

main {
    display: flex;
}

nav {
    flex-basis: 15%;
}

.links div:first-of-type {
  display: none;
}

article {
    flex-basis: 75%;
    margin-left: 150px;
}

.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
