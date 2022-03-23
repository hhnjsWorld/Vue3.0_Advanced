<template>
    <!-- 全局组件使用频率高 在入口文件里面注册即可 -->
    <div>
        <header>
            <slot name="weChat" />
        </header>
        <main>
            <slot />
        </main>
    </div>
</template>

<script>
    // import vue from "vue";

    export default {
        //   name: "",
        components: {},
        data() {
            return {};
        },
    };
</script>

<style scoped lang="scss">
    div {
        border: solid 1px darkblue;
        margin-top: 20px;
        border-radius: 5px;

        header {
            border-bottom: solid 1px darkblue;
            padding: 10px;
            background: grey;
        }

        main {
            padding: 10px;
        }
    }
</style>