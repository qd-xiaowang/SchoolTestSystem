<template>
  <div class="home">
    <div class="border"><van-nav-bar title="成绩概览"> </van-nav-bar></div>
    <van-tabs v-model="active" color="blue" title-active-color="blue">
      <van-tab title="校级考试"><SchoolCourse /></van-tab>
      <van-tab title="查看已考"><FenLei /></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ProfessionCourse from './child/course/ProfessionCourse.vue'
import SchoolCourse from './child/school/SchoolCourse.vue'
import FenLei from './child/accomplish/FenLei.vue';
export default {
  name: 'Home',
  components: { ProfessionCourse, SchoolCourse, FenLei },
  data() {
    return {
      active: '',
    };
  },
  computed: {
  },
  watch: {
    active(value) {
      sessionStorage.setItem('active', value);
    }
  },
  methods: {
    async fetch() {
      let res = await this.$http.get('rest/student_user/student');
      localStorage.personalDetails = JSON.stringify(res.data);
    }
  },
  created() {
    if (sessionStorage.getItem('active') != null) {
      this.active = sessionStorage.getItem('active') - 0;
    }
    this.fetch();
  },
}
</script>
<style scoped>
.border {
  border-bottom: 1px solid #ccc;
}
</style>