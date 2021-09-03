<template>
    <a :href="url">
        <img class="author author--rounded" :src="avatar" :alt="user">
    </a>
</template>
<script>
import {get} from "axios";
export default {
    data(){
        return{
            url:"",
            avatar:""
        };
    },
    props:{
        user:{
            type:String,
            required:true
        }
    },
    async mounted(){

        let author = await get(`https://api.github.com/users/${this.user}`);

        this.url = author.data.html_url;
        this.avatar = author.data.avatar_url;
    
    }
}
</script>
<style lang="stylus" scoped>
    .author
        &--rounded
            border-radius 50%
        width 30px
        height 30px
        margin 0 3px
        &:hover
            transform scale(1.2)
</style>