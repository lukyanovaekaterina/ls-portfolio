<template lang="pug">
  .skill-container
    h2 {{category.category}}
    hr
    table
      skill-item(
        v-for="skill in category.skills"
        :key="skill.id"
        :skill="skill"
      )
    hr
    form(
      @submit.prevent="addNewSkill"
      :class={blocked: loading}
    ).add-skill-wrapper
      input(type="text" placeholder="Name" v-model="skill.title")
      input(type="text" placeholder="Percent" v-model="skill.percent")
      button(
        type="submit"
        :disabled="loading"
      ) Добавить
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {
    skillItem: () => import("./skill-item")
  },
  data() {
    return {
      loading: false,
      skill: {
        title: "",
        percent: 0,
        category: this.category.id
      }
    };
  },
  props: {
    category: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
       ...mapActions("skills", ["addSkill"]),
    async addNewSkill() {
      this.loading = true
      try {
        await this.addSkill(this.skill);
        this.skill.title = "";
        this.skill.percent = "";
      } catch (error) {
        // handling error
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.add-skill-wrapper.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
</style>