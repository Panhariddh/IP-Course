<script>
import Btn from './Btn.vue';
export default {
    components: {
        Btn,
    },
    props: {
        title: String,
        image: String,
        backgroundColor: String,
        width: Number
    },
    methods: {
        shopNow(promotion) {
            alert(`Let's Shop: ${this.title}`);
        }
    }
}
</script>
<template>
    <div class="promotion-card" :style="{ backgroundColor: backgroundColor }" >
        <h2 class="title">{{ title }}</h2>
        <!-- <button class="shop-btn">Shop Now →</button> -->
        <img :src="image" alt="banner image" class="promotion-img" :style="{ width: width + 'px'}">
        <!-- Attach click event to the Btn component -->
        <Btn @click="shopNow(promotion)" />
    </div>
</template>


<style scoped>
.promotion-card {
    width: 375px;
    height: 200px;
    border: none;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    position: relative;
}

.promotion-card :hover {
    cursor: pointer;
}

.promotion-img {
    position: absolute;
    right: 0px;
    bottom: 0px;
}
.title {
    text-align: start;
    color: #253D4E;
    padding: 0 0 60px 25px;
    width: 225px;
}
/* Hover effect for the Shop Now button */
.promotion-card:hover .shop-btn {
    background-color: yellow;
}
</style>