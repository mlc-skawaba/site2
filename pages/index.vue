<template>
    <v-app>
        <!-- header -->
        <v-app-bar clipped-left dark fixed app>
            <v-toolbar-title>Amazon Personalize</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <!-- Content -->
        <v-content app>
            <v-container grid-list-md text-xs-center>
                <v-layout row wrap>
                    <v-col v-for="(data, i) in datas" :key="i">
                        <v-card
                            class="mx-auto"
                            max-width="400"
                            tile
                            :href="'/recipe/' + data.recipe_code + '/'"
                        >
                            <v-img
                                height="150px"
                                :src="data.image"
                                v-if="data.image"
                            />
                            <v-img
                                height="150px"
                                :src="
                                    'https://dummyimage.com/400x150/000/fff.jpg&text=' +
                                        data.recipe_code
                                "
                                v-if="!data.image"
                            />
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>{{
                                        data.name
                                    }}</v-list-item-title>
                                    <v-card-text v-if="data.lead">
                                        {{ data.lead }}
                                    </v-card-text>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-col>
                </v-layout>
                <div class="text-center">
                    <v-pagination
                        v-model="page"
                        :length="length"
                        :page="page"
                        total-visible="10"
                    ></v-pagination>
                </div>
            </v-container>
        </v-content>

        <!-- Footer -->
        <v-footer dark app>
            <v-toolbar-title>Amazon Personalize</v-toolbar-title>
        </v-footer>
        <transition>
            <router-view />
        </transition>
    </v-app>
</template>

<script>
import func from "~/assets/functions.js";
import axios from "axios";

export default {
    data() {
        return {
            func: func,
            datas: null,
            page: 1,
            length: 1,
            size: 6
        };
    },
    methods: {
        async getDatas() {
            let result = await axios
            .get(
                `https://xshn7hqya2.execute-api.ap-northeast-1.amazonaws.com/Prod/recipes?size=${this.size}&from=${this.size * this.page}`
            )
            .then(res => {
                return res.data.data;
            });
            this.datas = result;
        }
    },
    watch: {
        page() {
            this.getDatas();
        }
    },
    async created() {
        this.getDatas();
        this.length = await axios
        .get(
            `https://xshn7hqya2.execute-api.ap-northeast-1.amazonaws.com/Prod/recipes?size=0`
        ).then(res => {
            return Math.floor(res.data.count / 6);
        });

    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c|Source+Sans+Pro&display=swap&subset=japanese");
body {
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 62.5%;
}
.v-application--wrap {
    background: #f8f5e6;
}
.content-title {
    margin-top: 5em;
    text-align: center;
    font-size: 3em;
    font-weight: bold;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s;
}
.v-enter,
.v-leave-to {
    opacity: 0;
}
@media screen and (max-width: 768px) {
    body {
        font-size: 1vw;
    }
}
@media screen and (max-width: 425px) {
    body {
        font-size: 0.3em;
    }
}
</style>