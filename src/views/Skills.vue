<template>
    <div>
        <LevelBar level="9" type="Html/CSS" />
        <LevelBar level="7" type="JavaScript"/>
        <LevelBar level="6" type="Vue.js"/>
        <LevelBar level="9" type="Git" />
    </div>
</template>

<script>
    import LevelBar from "../components/LevelBar";

    export default {
        name      : 'Skills',
        components: {
            LevelBar
        }
    }
</script>
