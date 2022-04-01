<template>
    <div>
        Card
        <div v-if="loading">loading...</div>
        <div v-else>
            cid : {{cid}}
        </div>
    </div> 
</template>

<script>
export default {
    data(){
        return {
            cid: 0,
            loading: true
        }
    },
    watch: {
        // '$route'() {
        //     this.fetchData()
        // }
        '$route': { //객체 감시
            handler: 'fetchData',
            immediate: true
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData () {
            this.loading = true
            setTimeout(() => {
                this.cid = this.$route.params.cid
                this.loading = false
            }, 1000)
        }
    }
}
</script>

<style>

</style>