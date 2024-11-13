<script setup>
import { onMounted, computed } from "vue"; // Add computed here
import { useProductStore } from "./stores/ProductStore"; // Import the store
import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";
import FeatureCategory from "./components/FeatureCategory.vue";

// Initialize the product store
const productStore = useProductStore();

// Computed property to get filtered categories from store
const filteredCategories = computed(() => productStore.filteredCategories);

// Method to select a group and update the store state
const selectGroup = (group) => {
  productStore.setSelectedGroup(group);
};

// Fetch categories, promotions, and groups on component mount
onMounted(async () => {
  await productStore.fetchCategories();
  await productStore.fetchPromotions();
  await productStore.fetchGroups();
  console.log("Categories loaded:", productStore.categories);
  console.log("Promotions loaded:", productStore.promotions);
  console.log("Groups loaded:", productStore.groups);
});
</script>

<template>
  <div id="app">
    <div class="flex flex-col">
      <div class="flex justify-between mt-5 mx-3">
        <h1 class="text-3xl">Featured Categories</h1>
        <div>
          <div class="flex gap-2 items-center">
            <!-- Display group names -->
            <FeatureCategory
              v-for="(group, index) in productStore.groups"
              :key="index"
              :name="group"
              @click="() => selectGroup(group)"
            />
          </div>
        </div>
      </div>
    </div>
    
    <div class="category-card">
      <!-- Use filteredCategories to show categories based on selected group -->
      <Category
        v-for="(f, index) in filteredCategories" 
        :key="index"
        :image="f.image"
        :name="f.name"
        :productCount="f.productCount"
        :color="f.color"
      />
    </div>

    <div class="promotion-section">
      <Promotion
        v-for="(promotion, index) in productStore.promotions" 
        :key="index"
        :title="promotion.title"
        :description="promotion.description"
        :image="promotion.image"
        :color="promotion.color"
        :width="promotion.width"
      />
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}
.category-card {
  display: flex;
  padding: 20px;
  
}
.promotion-section {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
}
</style>
