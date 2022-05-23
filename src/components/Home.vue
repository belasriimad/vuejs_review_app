<template>
  <div class="card">
    <div class="card-body">
      <Form />
      <AverageRating />
      <ul class='mt-4 list-group'>
        <ListItem 
          v-for="review in store.getReviews" 
          :key="review.id"
          :review="review" />
      </ul>
    </div>
  </div>
</template>

<script setup>
  import ListItem from './ListItem.vue'
  import Form from './Form.vue'
  import AverageRating from './AverageRating.vue'
  import { useReviewStore } from '../stores'
  import { reactive } from '@vue/runtime-core';

  //get store
  const store = useReviewStore();

  //set data
  const data = reactive({
    reviewToEdit: null
  });

</script>

<style>
</style>