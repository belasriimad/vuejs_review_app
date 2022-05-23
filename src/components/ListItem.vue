<template>
    <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">{{review.name}}</div>
            <p>{{review.message}}</p>
            <p>
                <star-rating 
                    read-only
                    :star-size="24"
                    :rating="review.rating"
                    ></star-rating>
            </p>
        </div>
        <div class="d-flex flex-column align-items-center">
            <button 
                @click="store.removeReview(review.id)"
                class="btn btn-sm btn-danger mb-2">
                <i class="bi bi-trash"></i>
            </button>
            <router-link 
                :to="`/edit/${review.id}`"
                class="btn btn-sm btn-warning mb-2">
                <i class="bi bi-pencil"></i>
            </router-link>
        </div>
    </li>
</template>

<script setup>
    import StarRating from 'vue-star-rating'
    import { useReviewStore } from '../stores'

    //get store 
    const store = useReviewStore();
    
    //get the props
    const props = defineProps({
        review:{
            type: Object,
            required: true
        }
    });
</script>

<style>

</style>