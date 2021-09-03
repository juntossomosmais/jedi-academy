<template>
    <div v-if="!$isServer"  class="authors">
        <label class="authors__label">Autores: </label> 
        <slot/>
    </div>
</template>
<script>
import author from "./author.vue";
export default {
    components:{author}
}
</script>
<style lang="stylus" scoped>
    .authors
        &__label
            color $accentColor
            font-weight bold
            margin-right 5px
        display flex
        align-items center
</style>