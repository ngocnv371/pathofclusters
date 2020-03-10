<template>
  <div id="app">
    <b-navbar class="is-black">
      <template slot="start">
        <b-navbar-item href="#">
          Path of Clusters
        </b-navbar-item>
      </template>
      <template slot="end">
        <div class="navbar-item">
          <ClusterFilter />
        </div>
      </template>
    </b-navbar>
    <div class="container">
      <ClusterList />
    </div>
    <footer class="footer is-black">
      <div class="content has-text-centered">
        <p>
          <strong>Path of Clusters</strong> by
          <a href="https://ngocnv371.github.io">Ngoc Ngo</a>. The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import ClusterList from "./components/ClusterList.vue";
import ClusterFilter from "./components/ClusterFilter.vue";

export default {
  name: "App",
  components: {
    ClusterList,
    ClusterFilter
  }
};
</script>
<style>
.footer.is-black {
  background-color: black;
}
</style>