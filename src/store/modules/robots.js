import axios from "axios";

export default {
  namespaced: true, // state is always namespaced, so use state.robots, but actions etc must be specified.
  state: {
    cart: [], // default is import for vue to notice later changes
    parts: null,
    foo: "robots-foo",
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getParts({ commit }) {
      // {state, getters, commit, dispatch} out of context
      axios
        .get("/api/parts") // get parts from api, whose target is configured in vue.config.js by proxy
        .then((result) => commit("updateParts", result.data)) // then commit mutations to update store
        .catch(console.error);
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      return axios
        .post("/api/cart", cart)
        .then(() => commit("addRobotToCart", robot));
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
    foo(state) {
      return `robots-getter/${state.foo}`;
    },
  },
};
