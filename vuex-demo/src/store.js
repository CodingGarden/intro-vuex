import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Hello Vuex',
    newTodo: '',
    todos: [{
      title: 'Learn Vue.js',
      done: false
    }, {
      title: 'Learn Vuex',
      done: false
    }]
  },
  mutations: {
    setNewTodo(state, value) {
      state.newTodo = value;
    },
    addTodo(state) {
      state.todos.push({
        title: state.newTodo,
        done: false
      });
    },
    setTodoDone(state, index) {
      state.todos[index].done = true;
    },
    setTodoNotDone(state, index) {
      state.todos[index].done = false;
    },
    allDone(state) {
      state.todos.forEach((todo) => {
        todo.done = true;
      });
    }
  },
  actions: {
    addTodo(context) {
      context.commit('addTodo');
      context.commit('setNewTodo', '');
    },
    toggleTodoDone(context, index) {
      const todo = context.state.todos[index];
      if (todo.done) {
        context.commit('setTodoNotDone', index);
      } else {
        context.commit('setTodoDone', index);
      }
    }
  },
});
