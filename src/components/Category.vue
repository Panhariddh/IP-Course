<template>
  <div class="category-container">
    <img class="category-image" :src="image" :alt="name" />
    <h3 class="category-name">{{ name }}</h3>
    <h4 class="category-count">{{ productCount }}</h4>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    name: String,
    productCount: String,
    image: String,
    color: String,
  },
};
</script>

<style scoped>
.category-container {
  display: flex;
  flex-direction: column;
  width: 110px;
  height: 150px; /* Reduced height */
  border: 2px solid #000; /* Adjust as needed */
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s;
  margin-left: 15px;
}

.category-container:hover {
  transform: scale(0.95);
}

.category-image {
  width: 80px; /* Adjust as needed */
  height: 100px; /* Reduced height to make it appear smaller */
  object-fit: cover;
  border-radius: 4px; /* Optional for rounded corners */
}

.category-name {
  font-size: 0.875rem; /* Reduced font size */
}

.category-count {
  opacity: 0.5;
  margin-bottom: 10px; /* Adjusted margin */
  font-size: 0.75rem; /* Reduced font size */
}
</style>
