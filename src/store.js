/* vuex를 이용한 store(저장소)만들기 */
import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            count: 0,
            cart: [{
                product_id: 1,
                product_name: "아이폰 거치대",
                category: "A"
            }]
        }
    },
    getters: {
        cartCount: (state) => {
            return state.cart.length;
        }
    },
    mutations: { //동기처리
        increment(state) {
            state.count++;
        }
    },
    actions: { //비동기 처리. 여러개의 mutation을 실행할 때 사용.
        increment(context) {
            context.commit('increment');
        }
    }
});
export default store;

/* 사용자가 로그인 했는지 account 정보 관리 store */
import persistedstate from 'vuex-persistedstate';

const authStore = createStore({
    state() {
        return {
            user: {}
        }
    },
    mutations: {
        user(state, data) {
            state.user = data;
        }
    },
    plugins: [
        persistedstate({
            paths: ['user']
        })
    ]
});
/* 여기까지 */
