<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
</template>

<script>
import parts from "../data/parts";

export default {
  name: "PartInfo",
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    part() {
      //   const partType = this.$route.params.partType;
      //   const id = this.$route.params.id;
      const { partType, id } = this;
      return parts[partType].find((part) => part.id === +id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
