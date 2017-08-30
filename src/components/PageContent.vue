<template>
    <div>
        <tip-login :state="userState"></tip-login>
        <record-member v-if="isCanRecord()"></record-member>
    </div>
</template>

<script>
    import TipLogin from "./TipLogin.vue";
    import RecordMember from "./RecordMember.vue";
    import CommonManager from "./js/CommonManager";

    let manager = new CommonManager();

    const USER_STATE_ALLOW = 'Allow'; //已登录并允许
    const USER_STATE_UNAUTHORIZED = 'Unauthorized'; //未登录
    export default {
        components: {
            RecordMember,
            TipLogin
        },
        name: 'page-content',
        data() {
            return {
                userState: 'Allow'
            }
        },
        methods: {
            isCanRecord: function () {
                return this.userState == USER_STATE_ALLOW;
            },
            checkUser: function () {
                let self = this;
                manager.checkUser(function (ret, isSuccess) {
                    if (isSuccess && ret.code == 0) {
                        self.userState = ret.result.state;
                    } else {
                        self.userState = USER_STATE_UNAUTHORIZED;
                    }
                });
            }
        },
        mounted:function () {
            this.checkUser();
        }
    }
</script>

<style>

</style>