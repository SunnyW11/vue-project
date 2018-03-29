import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n';
import translationsCh from '../i18n/zh.json';
import translationsEn from '../i18n/en.json';

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        userName:'xxx',
        userOID:'0000001'
    },
    getters:{

    },
    mutations:{
        setUserName(state,name){
            state.userName=name;
        }
    },
    modules: {
        i18n: vuexI18n.store,
    },
    actions:{

    }
});

Vue.use(vuexI18n.plugin, store);
// json的key必须全部大写
Vue.i18n.add('ch', translationsCh);
Vue.i18n.add('en', translationsEn);

Vue.i18n.set('en');


export default store;