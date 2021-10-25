
<template>
    <v-container>
      <v-layout wrap>
        <v-flex >
          <v-card elevation="4" light tag="section">
              <v-alert v-if="Email.error" type="error">
                {{ Email.error }}
              </v-alert>
            <v-card-title>
                <h3  align-center class="headline">
                  {{ NameSearch }}
                </h3>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-form>
                <v-text-field outline label="Find user by email" type="text" v-model="Email.Email"></v-text-field>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="SearchUser" color="info" :large="$vuetify.breakpoint.smAndUp">
                Search User by email
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-flex v-if=User>
          <v-text-field outline disabled label="UserId" type="text" v-model="User.id"></v-text-field>
          <v-text-field outline disabled label="Firstname" type="text" v-model="User.firstName"></v-text-field>
          <v-text-field outline disabled label="Lastname" type="text" v-model="User.lastName"></v-text-field>
          <v-text-field outline disabled label="Age" type="text" v-model="User.age"></v-text-field>
          <v-text-field outline disabled label="Postcode" type="text" v-model="User.postcode"></v-text-field>
          <v-text-field outline disabled label="Address" type="text" v-model="User.address"></v-text-field>
          <v-text-field outline disabled label="Email" type="text" v-model="User.email"></v-text-field>
      </v-flex>
    </v-container>
</template>

<script>

export default {
      components: {
  },
  data() {
    return {
      NameSearch: 'Search user by Email',
      User: null,
      Email:{
          Email: null,
          error: null,
      }
    };
  },
  mounted() {
    
  },
  methods: {
     SearchUser() {
      this.$store.dispatch('SearchUser', this.Email);
      setTimeout(() => { this.User = this.$store.state.user; }, 1000);

    },
  },
};
</script>

<style>
</style>