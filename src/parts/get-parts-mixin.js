export default {
  created() {
    this.$store.dispatch("getParts"); // use commit to commit mutations and use dispatch to dispatch actions
  },
  computed: {
    parts() {
      return (
        this.$store.state.parts || {
          heads: [],
          arms: [],
          torsos: [],
          bases: [],
        }
      );
    },
  },
};
