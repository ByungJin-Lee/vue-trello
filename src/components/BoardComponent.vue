<template>
    <div>
        Board
        <div v-if="loading">loading...</div>
        <div v-else>
            <div>bid : {{bid}}</div>
            <router-link :to="`/b/${bid}/c/1`">C1</router-link><br>
            <router-link :to="`/b/${bid}/c/2`">C2</router-link>
        </div>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            bid: 0,
            loading: true
        }
    },
    created(){
        this.fetchData()
    },
    methods: {
        fetchData () {
            this.loading = true;
            setTimeout(()=>{
                this.bid = this.$route.params.bid
                this.loading = false;
            }, 1000)
        }
    }
}
</script>

<style>

</style>