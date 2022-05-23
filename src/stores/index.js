import { defineStore } from 'pinia'

export const useReviewStore = defineStore('reviews', {
    state: () => {
        return { 
            reviews:[]
        }
    },
    getters: {
        getReviews(state) {
            return state.reviews;
        },
        getReview(state) {
            return (reviewId) => state.reviews.find(review => review.id === reviewId);
        },
        reviewsLength(state){
            return state.reviews.length;
        },
        calculateReviewsAverage(state){
            return state.reviews.reduce((acc,review) => acc + review.rating / state.reviews.length ,0).toFixed(1);
        }
    },
    actions: {
        addReview(review) {
            this.reviews.unshift(review);
        },
        updateReview(item){
            let index = this.reviews.findIndex(review => review.id === item.id);
            this.reviews[index].name = item.name;
            this.reviews[index].message = item.message;
            this.reviews[index].rating = item.rating;
        },
        removeReview(reviewId) {
            this.reviews = this.reviews.filter(review => review.id !== reviewId);
        }
    },
})