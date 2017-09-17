<template>
  <div id="app" class="default-font">
    <header>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">
              Easy Order
            </a>
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="menu">
            <ul class="nav navbar-nav navbar-right">
              <li class="active">
                <a href="/pedidos">
                  Pedidos
                </a>
              </li>
              <li>
                <a href="#">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer class="footer">
      <p class="text-muted">
        Desenvolvido por
        <a href="mailto:vinipetter@gmail.com">Vinícius Marcili</a> e
        <a href="#">Giulio Denardi</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  margin: 0;
}
</style>
