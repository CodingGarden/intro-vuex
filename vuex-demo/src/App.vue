<template>
  <div id="app">
    <h2>{{title}}</h2>
    <form @submit.prevent="addTodo">
      <label for="newTodo">New Todo</label>
      <input v-model="newTodo" type="text" name="newTodo">
      <button type="submit" name="button">Add</button>
    </form>
    <button @click="allDone" type="button" name="button">All Done</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input @click="toggleTodoDone(index)" type="checkbox" :checked="todo.done">
        <span :class="{ done: todo.done }">{{todo.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'app',
  computed: {
    newTodo: {
      get() {
        return this.$store.state.newTodo;
      },
      set(value) {
        this.$store.commit('setNewTodo', value);
      }
    },
    ...mapState(['title', 'todos'])
  },
  methods: {
    ...mapMutations(['allDone']),
    ...mapActions(['addTodo', 'toggleTodoDone'])
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.done {
  text-decoration: line-through;
}
</style>
