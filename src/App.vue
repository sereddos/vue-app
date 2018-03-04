<template>
  <div id="app">
    <div class="header">
      <div class="header__logo">
        <router-link to="/">
          <img src="./assets/logo.png">
        </router-link>
      </div>
      <ul class="top-menu">
        <li class="top-menu__item">
          <router-link to="/list">User list</router-link>
        </li>
        <li class="top-menu__item">
          <router-link to="/user/add">Add user</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
