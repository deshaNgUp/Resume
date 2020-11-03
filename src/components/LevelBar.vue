<template>
    <div>
        <div class="level-bar">
           <div v-for="index in limit" :key="index" v-bind:class="{ active: index <= counter }" class="level-bar-item"></div>
           <p class="textFor">{{myType}}</p> 
        </div>
    </div>
</template>

<script>
    export default {
        name : 'LevelBar',
        props: ['level', 'max', "type"],
        data : function () {
            console.log(this.type);
            return {
                myType: this.type,
                counter: this.level || 0,
                limit  : this.max || 10
            }
        }
    }

</script>

<style scoped lang="scss">
    @import "../assets/scss/variables";

    .level-bar {
        display: flex;
        margin: 0 10px 10px 0;
      
    }

    .textFor {
        padding-left: 10px; 
    }

    .level-bar-item {
        width: 20px;
        height: 20px;

        border-radius: 5px;
        border: 2px solid #fff;
        box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.5), inset 2px 2px 5px 0 rgba(0, 0, 0, 0.5);

        &.active {
            background: $color-skills;
        }

        & + & {
            margin-left: 10px;
        }
    }
</style>
