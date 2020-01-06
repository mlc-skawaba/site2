<template>
    <v-app>
        <!-- header -->
        <v-app-bar clipped-left dark fixed app>
            <v-toolbar-title>Amazon Personalize</v-toolbar-title>
            <v-spacer></v-spacer>
            <div v-for="item in ableLang" :key="item">
                <v-btn rounded text @click="langChange(item)" v-if="func.in_array(item, ableLang)">{{langList[item]}}</v-btn>
            </div>
        </v-app-bar>

        <!-- Content -->
        <v-content app>
                <p v-if="ableLang.length && !lang" class="content-title">おすすめのレシピは「{{ja.name}}」です。<br>
                    言語をお選びください。</p>
            <v-container v-if="!lang" id="langBtnbox">
                <div v-for="item in ableLang" :key="item">
                    <v-btn x-large outlined @click="langChange(item)" v-if="func.in_array(item, ableLang)">{{langList[item]}}</v-btn>
                </div>
                <h1 v-if="!ableLang.length">Not Found ...</h1>
            </v-container>

            <!-- レシピ -->
            <v-container v-if="recipe" grid-list-md text-xs-center>
                <recipe
                :src="ja.image"
                :title="recipe.name"
                :desc="recipe.lead"
                :recipe="recipe.body"
                />
            </v-container>

        </v-content>

        <!-- Footer -->
        <v-footer dark app>
            <v-toolbar-title>Amazon Personalize</v-toolbar-title>
        </v-footer>
        <transition>
            <router-view/>
        </transition>
    </v-app>
</template>

<script>
import func from "~/assets/functions.js";
import recipe from "~/components/recipe.vue";
import axios from 'axios'

export default {
    async asyncData ({ params }) {
        // スラッシュのあとに何かあればそれをIDとする。デフォ 1
        let param = `recipe_code=${params.id ? params.id : '1'}`;

        if ( params.id ) {
            let regex = new RegExp('\\jancode=([0-9]+$)');
            let result = params.id.match(regex);
            if ( result ) {
                param = 'jancode=' + result[1];
            }
        }

        const { data } = await axios.get(`https://xshn7hqya2.execute-api.ap-northeast-1.amazonaws.com/Prod/recipes?${param}`)

        let ableLang = new Array();
        for ( let key in data.data ) {
            ableLang.push(data.data[key].lang);
        }

        return {
            recipes: data.data,
            ableLang: ableLang,
        }
    },

    components: {
        recipe,
    },
    data() {
        return {
            langList: {
                "ja": "日本語",
                "en": "English",
                "zh": "中文",
                "ko":"한국",
                "ar":"العربية",
                "de":"Deutsch",
                'fr': 'Le français',
                'it': 'italiano',
                'ru': 'русский',
                'es': 'Espanol',
                'th': 'ภาษาไทย',
                'tr': 'Türk',
                'vi': 'Tiếng việt nam'
            },
            ableLang: [],
            lang: null,
            recipe: null,
            recipes:null,
            func:func,
        }
    },
    computed: {
        ja() {
            return this.recipes.find((v) => v.lang === 'ja');
        }
    },
    methods: {
        // 言語変更時の挙動
        langChange(lang) {
            if ( this.lang !== lang ) {
                this.lang = lang;
                // recipeからlangのものを検索する
                this.recipe = this.recipes.find((v) => v.lang === this.lang);
            }
        }
    }
};


</script>

<style>
@import url("https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c|Source+Sans+Pro&display=swap&subset=japanese");
body {
    font-family: 'M PLUS Rounded 1c', sans-serif;
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

#langBtnbox {
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#langBtnbox div {
    font-size: 4em;
    width: 33%;
}
#langBtnbox div button {
    font-size: 1em;
    width: 100%;
    padding: calc(100% / 2) 0;
}
.v-enter-active, .v-leave-active {
    transition: opacity .5s;
}
.v-enter, .v-leave-to {
    opacity: 0;
}
@media screen and (max-width:768px){
    body {
        font-size: 1vw;
    }
}
@media screen and (max-width:425px){
    body {
        font-size: .3em;
    }
    #langBtnbox {
        flex-direction: column;
        justify-content: center;
    }
    #langBtnbox div {
        width: 95%;
        padding: 0
    }
    #langBtnbox div button {
        padding: 30% 0;
    }
}
</style>