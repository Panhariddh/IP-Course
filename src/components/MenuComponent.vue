<template>
    <div class="list-cate">
        <h3>{{ name }}</h3>
        <div class="group">
            <p v-for="(item, index) in group" :key="index" @click="$emit('group-select', item)">{{ item }}</p>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        group: {
            type: String,
            required: true,
        }
    },
};
</script>

<style scoped>
.list-cate {
    padding: 5px;
    width: 150px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    gap: 400px;

}
.list-cate h3 {
    color: #253D4E;
    font-weight: bold;
    width: 250px;
}
.group{
    display: flex;
    width: 100%;
    gap: 25px;
    color: #253D4E;
}
</style>