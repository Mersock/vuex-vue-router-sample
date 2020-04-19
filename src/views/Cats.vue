<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table :items="cats">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/${data.value}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import cats from '@/data/cats'

export default {
  data () {
    return {
      cats
    }
  }
}
</script>
