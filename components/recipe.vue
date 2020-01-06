<template>
<div class="recipe">

<h1 class="title">{{title}}</h1>

<v-layout wrap class="flex">
    <v-flex xl6 lg6 md6 sm12>
        <v-img
            :src="src"
            class="grey lighten-2"
            >
            <template v-slot:placeholder>
                <v-layout
                fill-height
                align-center
                justify-center
                ma-0
                >
                <v-progress-circular indeterminate size="100" color="red lighten-2"></v-progress-circular>
                </v-layout>
            </template>
            </v-img>
    </v-flex>

    <v-flex xl6 lg6 md6 sm12>
        <div v-html="desc" class="desc"></div>
    </v-flex>
</v-layout>

<section v-html="md" class="order desc elevation-3"></section>

</div>
</template>

<script>
export default {
    data: () => ({
    }),
    methods: {
    },
    props: {
        src: String,
        title: String,
        subtitle: String,
        desc: String,
        recipe: String,
    },
    computed: {
        md() {
            return marked(this.recipe);
        }
    }
}
</script>

<style>
.recipe h1.title {
    font-size: 4em !important;
    line-height: 1.5;
    text-align: center;
    padding: 50px 0;
}

.recipe h1.title:before,
.recipe h1.title:after {
    content: '―';
    color: #F00;
    margin: 1em;
}

.recipe .v-image {
    border-radius: 25px;
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.6));
}

img {
    width: 100%;
    height: auto;
}
.flex {
    align-items: center;
}

.desc {
    padding-left: 1em;
    font-size: 2em;
}
.order {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px 10px;
    border-radius: 25px;
    white-space: pre-wrap;
    width: 750px;
    margin: 1em auto 0;
}
@media screen and (max-width:768px){
    .recipe h1 {
        font-size: 6vw;
    }
    .recipe .v-image {
        margin-bottom: 1em;
    }
    .desc {
        font-size: 4.5vw;
    }
    .order {
        width: 100%;
    }
}
</style>
