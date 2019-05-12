new Vue({
  el: '#app',

  computed: {
    filtered_todos() {
      const vm = this;

      if (vm.search.length > 0) {
        return vm.todos.filter(function (todo) {
          return todo.body.toLowerCase().includes(vm.search.toLowerCase()) ? true : false;
        });
      }

      return vm.todos;
    }
  },

  data() {
    return {
      title: 'To Do App',
      new_todo: '',
      search: '',
      todos: [
        { body: 'Make Business Plan' },
        { body: 'Build App Core' },
        { body: 'Separate tasks to each members' }
      ]
    }
  },

  methods: {
    addTask() {
      let new_todo = this.new_todo;
      if (new_todo.length > 0) {
        this.todos.push({ body: new_todo });
        this.new_todo = '';
      } else {
        alert('Field cannot empty!');
      }
    },
    removeTask(key) {
      let todos = this.todos.filter(function (todo, $key) {
        if ($key == key) {
          return false;
        }

        return true;
      });

      this.todos = todos;
    },
  }
})