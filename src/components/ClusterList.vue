<template>
  <div class="passives">
    <div
      v-for="passive of filteredPassives"
      class="passive"
      :class="{ keystone: passive.keystone }"
      :key="passive.name"
    >
      <img class="passive-icon" :src="passive.icon" />
      <div class="passive-content">
        <h3 class="passive-header" v-text="passive.name"></h3>
        <div class="passive-stats" v-html="passive.stats"></div>
        <div class="passive-reminder" v-html="passive.reminder"></div>
        <div class="passive-flavour" v-html="passive.flavour"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["filteredPassives"])
  }
};
</script>

<style>
.passives {
  color: #c8c8c8;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.passive {
  border: 1px solid #131313;

  display: flex;
  padding: 10px;
  margin: 5px;

  box-sizing: border-box;
  width: calc(50% - 10px);
}
.passive.keystone {
  width: 100%;
}
.passive-content {
  flex: 1 0 0px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.passive-icon {
  flex-basis: 50px;
  width: 50px;
  height: 50px;
  border: none;
}
.passive.keystone .passive-icon {
  width: 100px;
  height: 100px;
  flex-basis: 100px;
}
.passive-reminder {
  font-style: italic;
  color: #808080;
}
.passive-flavour {
  font-style: italic;
  color: #af6025;
}
.passive-stats {
  margin-bottom: auto;
}
</style>
