<template>
  <div>
    <header>
      <div>Header</div>
      <nav>
        <router-link to="/page1" active-class="active-link">Page 1</router-link>
        <router-link to="/page2" active-class="active-link">Page 2</router-link>
        <router-link to="/page3" active-class="active-link">Page 3</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>Footer</p>
    </footer>
  </div>
</template>

<script>

</script>

<style scoped>
header {
  background-color: #2aaa5f;
  padding: 15px; 
  text-align: center;
  border-bottom: 1px solid #ddd;
  width: 100%; 
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  box-sizing: border-box; 
}

header nav {
  margin-left: auto; 
}

header nav a {
  text-decoration: none; 
  padding: 10px 20px; 
  font-size: 16px;
  color: white; 
}

header nav a.active-link {
  color: red; 
}

footer {
  background-color: #2aaa5f;
  padding: 15px; 
  text-align: center;
  border-top: 1px solid #ddd;
  width: 100%; 
  box-sizing: border-box;
  font-size: 18px; 
}
</style>