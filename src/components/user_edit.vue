<template>
  <div>
    user edit {{ id }}

    <user-form v-if="user" v-model="user"></user-form>
  </div>
</template>

<script>
  import UserForm from './user_form.vue'
  import axios from 'axios'

  export default {
    name: 'user_edit',
    props: {
      id: String
    },
    components: {
      UserForm
    },
    data: () => ({
      url: 'http://localhost:3000/users/',
      user: null
    }),
    computed: {
      userUrl () {
        return `${this.url}${this.id}`
      }
    },
    methods: {
      loadData () {
        axios.get(this.userUrl)
          .then(response => {
            this.user = response.data
          })
      }
    },
    mounted () {
      this.loadData()
    }
  }
</script>
