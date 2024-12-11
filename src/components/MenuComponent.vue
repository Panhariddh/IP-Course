<template>
    <aside class="menu">
      <ul>
        <li><a href="#" class="menu-text">Menu</a></li>
        <li><a href="#" class="menu-link">Section 1</a></li>
        <li><a href="#" class="menu-link">Section 2</a></li>
        <li><a href="#" class="menu-link">Section 3</a></li>
        <li><a href="#" class="menu-link">Section 4</a></li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'MenuComponent',
  };
  </script>
  
  <style scoped>
  .menu {
    background-color: black;
    color: white;
    width: 200px; /* Fixed width for the sidebar */
    padding: 15px;
    font-size: 24px;
    align-items: start;
    justify-content: space-between;
    gap: 10px;
    border: solid 1px;
  }
  
  .menu ul {
    list-style: none;
    padding: 0;
  }
  
  .menu-link {
    display: block;
    margin-bottom: 10px;
    color: white;
    text-decoration: none;
    padding: 10px 0;
    gap: 25px;
  }
  .menu-text{
    display: block;
    margin-bottom: 30px;
    color: white;
    text-decoration: none;
  }
  </style>
  