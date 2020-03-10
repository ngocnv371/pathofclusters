<template>
  <b-input placeholder="Filter" :value="filter" @input="handleInput"></b-input>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      value: ""
    };
  },
  computed: {
    ...mapGetters(["filter"])
  },
  methods: {
    ...mapActions(["setFilter"]),
    handleInput(payload) {
      this.setFilter(payload);
    }
  }
};
</script>
