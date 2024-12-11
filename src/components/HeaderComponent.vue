<template>
    <header class="header">
      <div>Header</div>
      <nav>
        <router-link to="/page1" class="nav-link" active-class="active">Page 1</router-link>
        <router-link to="/page2" class="nav-link" active-class="active">Page 2</router-link>
        <router-link to="/page3" class="nav-link" active-class="active">Page 3</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    padding: 10px 20px;
    height: 60px;
    font-size: 28px;
    border: solid 1px;
  }
  
  .nav-link {
    margin: 0 15px;
    color: white;
    text-decoration: none;
  }
  
  .nav-link.active {
    color: red;
    font-weight: bold;
  }
  </style>
  