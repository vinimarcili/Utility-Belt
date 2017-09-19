<template>
  <section id="orders">
    <b-container>
      <b-row class="page-title">
          <b-col>
            <h1 class="title-default">
              Pedidos
            </h1>
            <p>
              Aqui você pode adicionar, editar ou cancelar pedidos.
            </p>
          </b-col>
      </b-row>
      <div class="orders-list">
        <b-row class="orders-list-buttons">
          <button class="new green-light-bg transition">
            Adicionar Pedido <i class="fa fa-plus-square" aria-hidden="true"></i>
          </button>
        </b-row>
        <b-row class="orders-list-header">
          <b-col>
            ID
          </b-col>
          <b-col class="hidden-xs-down">
            Status
          </b-col>
          <b-col class="hidden-xs-down">
            Data
          </b-col>
          <b-col>
            Ações
          </b-col>
        </b-row>
        <b-row class="orders-list-body">
          <b-col>
            1
          </b-col>
          <b-col class="hidden-xs-down">
            <span class="finished">
              Finalizado
            </span>
          </b-col>
          <b-col class="hidden-xs-down">
            03/06/2017
          </b-col>
          <b-col>
            <button class="details transition">
              Detalhes <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Orders',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
#orders {
  .page-title {
    p {
      text-align: center;
    }
  }
  .orders-list {
    .orders-list-buttons {
      button {
        margin: 5px 0 15px;
        height: 35px;
        cursor: pointer;
        &.new {
          color: white;
          border: none;
          &:focus {
            outline: none;
          }
        }
      }
    }
    .orders-list-header {
      font-weight: 600;
      background: #eee;
      border: 1px solid black;
      border-right: none;
      height: 40px;
      line-height: 38px;
      .col {
        border-right: 1px solid black;
      }
    }
    .orders-list-body {
      border: 1px solid black;
      border-right: none;
      border-top: none;
      height: 40px;
      line-height: 38px;
      .col {
        border-right: 1px solid black;
      }
      button {
        cursor: pointer;
        &.details {
          border: 1px solid #000;
          background: transparent;
          height: 30px;
          line-height: 25px;
          &:hover {
            background: #ddd;
          }
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
