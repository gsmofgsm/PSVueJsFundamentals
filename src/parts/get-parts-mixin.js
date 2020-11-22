export default {
  created() {
    this.$store.dispatch("robots/getParts"); // use commit to commit mutations and use dispatch to dispatch actions
  },
  computed: {
    parts() {
      return (
        this.$store.state.robots.parts || {
          heads: [],
          arms: [],
          torsos: [],
          bases: [],
        }
      );
    },
  },
};
