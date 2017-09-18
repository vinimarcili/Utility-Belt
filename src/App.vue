<template>
  <div id="app" class="default-font">
    <header>
      <b-navbar toggle-breakpoint="sm" toggleable="sm">
        <b-navbar-brand class="transition" href="/">EasyOrder</b-navbar-brand>
        <b-nav-toggle target="menu" class="transition">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </b-nav-toggle>
        <b-collapse is-nav id="menu">
          <b-nav is-nav-bar right>
            <b-nav-item href="/pedidos">Pedidos</b-nav-item>
            <b-nav-item href="#" disabled>Clientes</b-nav-item>
            <b-nav-item href="#" disabled>Logout</b-nav-item>
          </b-nav>
        </b-collapse>
      </b-navbar>
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
  header {
    nav {
      padding: 0;
      .navbar-brand {
        color: black;
        margin: 0;
        padding: 7px 15px;
        &:hover {
          background: black;
          color: white;
        }
      }
      #menu{
        background: #eee;
        padding: 1px;
        justify-content: flex-end;
        .navbar-nav {
          li {
            text-align: center;
            a {
              transition: all 0.3s ease;
              color: black;
              &:hover {
                background: black;
                color: white;
              }
            }
          }
        }
      }
      .navbar-toggler {
        background: white;
        border: 2px solid black;
        border-radius: 5px;
        color: black;
        display: none;
        float: right;
        width: 40px;
        height: 35px;
        font-size: 23px;
        position: relative;
        right: 15px;
        text-align: center;
        padding: 0;
        &:hover {
          background: black;
          color: white;
        }
        &:focus {
          outline: none;
        }
      }
      @media (max-width: 575px) {
        .navbar-toggler{
          display: inline-block;
        }
        #menu{
          justify-content: initial;
          .navbar-nav{
            width: 100%;
            li {
              display: block;
              width: 100%;
            }
          }
          clear: both;
        }
      }
    }
  }
}
</style>
