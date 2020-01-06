<template>
<v-card class="d-inline-block mx-auto recommend" @click="$emit('change', id)">
<v-container>
<v-row justify="space-between">
<v-col cols="auto">
<v-img
height="200"
width="200"
:src="src"
></v-img>
</v-col>

<v-col
cols="auto"
class="text-center pl-0"
>
<v-row
class="flex-column ma-0 fill-height"
justify="center"
>
</v-row>
</v-col>
</v-row>
</v-container>
</v-card>
</template>

<script>
export default {
    data: () => ({
        //
    }),
    props: {
        src: String,
        id: String,
        recommendRecipes: Array,
        recipe: Object,
    },
}
</script>

<style>
.v-card.recommend {
    transition: 0.5s;
}
.v-card.recommend:hover {
    opacity: 0.5;
    transition: 0.5s;
}
</style>