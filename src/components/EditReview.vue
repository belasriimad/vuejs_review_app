<template>
    <Form 
        :updating="data.updating"
        :reviewId="route.params.id"/>
</template>

<script setup>
    import { reactive, onMounted } from '@vue/runtime-core';
    import Form from './Form.vue'
    import { useReviewStore } from '../stores'
    import { useRoute } from 'vue-router';
    
    //set data
    const data = reactive({
        reviewId: '',
        updating: true
    });

    //get route 
    const route = useRoute();

    //get review to edit on mounted
    onMounted(() => {
        data.reviewId = route.params.id;
    });
</script>

<style>

</style>