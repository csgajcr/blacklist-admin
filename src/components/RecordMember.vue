<template>
    <div class="bs-example">
        <form ref="form">
            <div class="form-group">
                <label for="inputId">ID/名称</label>
                <input type="email" v-model="name" class="form-control" id="inputId" placeholder="名称">
            </div>
            <div class="form-group">
                <label for="inputArea">所属大区</label>
                <select v-model="area" id="inputArea">
                    <option value="重庆1区" selected>重庆1区</option>
                    <option value="重庆2区">重庆2区</option>
                    <option value="西南1区">西南1区</option>
                    <option value="西南2区">西南2区</option>
                    <option value="西南3区">西南3区</option>
                    <option value="云贵1区">云贵1区</option>
                    <option value="贵州1区">贵州1区</option>
                    <option value="云南1区">云南1区</option>
                    <option value="陕西1区">陕西1区</option>
                    <option value="陕西2区">陕西2区</option>
                </select>
            </div>
            <div class="form-group">
                <label for="inputImage">附图</label>
                <input type="file" ref="inputFile" id="inputImage" accept="image/gif,image/jpg,image/jpeg,/image/png">
                <p class="help-block">可选，如有附图，请上传附图</p>
            </div>
            <div class="form-group">
                <label for="inputComment">备注</label>
                <input type="text" v-model="comment" class="form-control" id="inputComment" placeholder="备注">
            </div>
            <button type="button" class="btn btn-info" @click="onSubmitClick()">提交</button>
        </form>
    </div>
</template>

<script>

    import BootboxManager from './js/BootboxManager.js'
    import CommonManager from './js/CommonManager.js'

    let bootbox = new BootboxManager();
    let manager = new CommonManager();
    export default {
        name: 'record-member',
        data() {
            return {
                name: '',
                area: '重庆一区',
                comment: '',
            }
        },
        methods: {
            onSubmitClick: function () {
                let file = this.$refs.inputFile;
                let image = file.files[0];
                let dialog = bootbox.showLoadingDialog();
                let self = this;
                manager.submitMember(this.name, this.area, this.comment, image, function (ret, isSuccess) {
                    dialog.modal('hide');
                    if (isSuccess && ret.code == 0) {
                        bootbox.showSuccessMessage('提交成功');
                        self.name = '';
                        self.area = '重庆一区';
                        self.comment = '';
                        self.$refs.form.reset();
                    } else {
                        bootbox.showErrorMessage('提交失败，请稍后再试');
                    }
                });


            }
        }
    }
</script>

<style>
    .bs-example {
        background-color: #fff;
        border-color: #ddd;
        border-width: 1px;
        border-radius: 6px 6px 6px 6px;
        -webkit-box-shadow: none;
        box-shadow: none;
        position: relative;
        padding: 15px 15px 15px 15px;
        border-style: solid;
    }
</style>