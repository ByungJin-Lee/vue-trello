<template>
    <div>
        Board
        <div>bid : {{bid}}</div>
        <router-link :to="`/b/${bid}/c/1`">C1</router-link><br>
        <router-link :to="`/b/${bid}/c/2`">C2</router-link>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            bid: 0
        }
    },
    created(){
        this.bid = this.$route.params.bid
    }
}
</script>

<style>

</style>