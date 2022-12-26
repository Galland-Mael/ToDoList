<template>
  <router-link class="active" to="/">Accueil</router-link>
  <a href="#"> | </a>
  <router-link class="active" to="/todoList">TodoList</router-link>
  <a href="#"> | </a>
  <router-link class="active" to="/calculator">Calculator</router-link>
  <!--<nav>
    <todoList/>
  </nav>-->
  <router-view/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

.active:hover {
  color: #42b983;
  text-decoration: underline;
}

a {
  color: black;
  text-decoration: none;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>

</script>
