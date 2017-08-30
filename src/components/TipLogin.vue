<template>
    <div>
        <div class="alert alert-success" v-if="status==1">
            <b>请按照表单提示填入黑名单成员的信息，并点击提交以录入！</b>
        </div>
        <div class="alert alert-danger" v-else-if="status==2">
            <div class="text-center"><h4>您登陆的用户无权限进行黑名单的录入操作！</h4>
                如有疑问，或是遇到问题，请联系网站管理员QQ610691723<br/>
                您也可以选择，在<a href="http://bbs.dnfzhengfuzhe.com" target="_blank">bbs.dnfzhengfuzhe.com</a>
                登陆具有相应权限的账号来进行录入操作。
                登陆后请<a href="/">刷新</a>页面重试。
            </div>
        </div>
        <div class="alert alert-danger" v-else-if="status==3">
            <div class="text-center">
                <h4>您尚未登陆本系统，请登录后再进行录入操作！</h4>
                <a href="http://bbs.dnfzhengfuzhe.com/member.php?mod=logging&action=login" target="_blank">请点这里登录</a>
            </div>
        </div>
        <div class="alert alert-info" v-else="">
            <div class="text-center">
                <h4>系统异常，请稍后刷新页面后重试！</h4>
            </div>
        </div>
    </div>
</template>

<script>
    const USER_STATE_DENIED = 'Denied'; //已登录但不允许
    const USER_STATE_ALLOW = 'Allow'; //已登录并允许
    const USER_STATE_UNAUTHORIZED = 'Unauthorized'; //未登录

    export default {
        name: 'tip-login',
        props: ['state'],
        data() {
            return {}
        },
        mounted: function () {

        },
        computed: {
            status:function () {
                if (this.state==USER_STATE_ALLOW){
                    return 1;
                } else if (this.state==USER_STATE_DENIED){
                    return 2;
                } else if (this.state==USER_STATE_UNAUTHORIZED){
                    return 3;
                } else {
                    return -1;
                }
            }
        }
    }
</script>

<style>

</style>