<template>
    <form class='mt-5'>
        <div class='mb-3'>
            <label htmlFor='name' class='form-label'>Name</label>
            <input 
                v-model="data.name"
                type='text' 
                name='name'
                class='form-control' 
                placeholder='Name' />
        </div>
        <div class='mb-3'>
            <label htmlFor='message' class='form-label'>Message</label>
            <textarea 
                v-model="data.message"
                class='form-control' 
                name='message' 
                placeholder='Message'
                rows='3'></textarea>
        </div>
        <div class='mb-3'>
            <star-rating 
                v-model:rating="data.rating"
                @update:rating="setRating"></star-rating>
        </div>
        <div class='mb-3' v-if="updating">
            <button 
                @click.prevent="updateReview(reviewId)"
                :disabled="disabled"
                type='submit' 
                class='btn btn-warning'>
                update
            </button>
        </div>
        <div class='mb-3' v-else>
            <button 
                @click.prevent="storeReview"
                :disabled="disabled"
                type='submit' 
                class='btn btn-primary'>
                submit
            </button>
        </div>
    </form>
</template>

<script setup>
    //imports
    import { computed, reactive, onMounted } from 'vue'
    import StarRating from 'vue-star-rating'
    import { useReviewStore } from '../stores'
    import { v4 as uuidv4 } from 'uuid';
    import { useRouter } from 'vue-router';

    //get store
    const store = useReviewStore();

     //get routes
    const router = useRouter();

    //set data 
    const data = reactive({
        name: '',
        message: '',
        rating: 0,
    });

    //set rating
    const setRating = (number) => {
        data.rating = number;
    }

    //add review
    const storeReview = () => {
        store.addReview({
            id: uuidv4(),
            name: data.name,
            message: data.message,
            rating: data.rating
        });
        data.name = '';
        data.message = '';
        data.rating = 0;
    }

    //update review
    const updateReview = (reviewId) => {
        store.updateReview({
            id: reviewId,
            name: data.name,
            message: data.message,
            rating: data.rating
        });
        data.name = '';
        data.message = '';
        data.rating = 0;
        router.push('/');
    }

    //disable submit button when form is empty
    const disabled = computed(() => {
        if(!data.name || !data.message || data.rating === 0){
            return true;
        }
    }); 

    //define props 
    const props = defineProps({
        updating: {
            type: Boolean,
            default: false
        },
        reviewId: {
            type: String,
            required: false
        }
    });

    //fill review the form to update
    onMounted(() => {
        if(props.updating){
            const reviewToEdit = store.getReview(props.reviewId);
            data.name = reviewToEdit.name;
            data.message = reviewToEdit.message;
            data.rating = reviewToEdit.rating;
        }
    });
</script>

<style>
</style>