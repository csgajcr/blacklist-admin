<template>
    <div class="bs-example">
        <form ref="form">
            <div class="form-group">
                <label for="inputId">ID/名称</label>
                <input type="email" v-model="name" class="form-control" id="inputId" placeholder="名称">
            </div>
            <div class="form-group">
                <label for="inputArea">跨区</label>
                <select v-model="area" id="inputArea">
                    <option value="跨3B" selected="selected">跨3B</option>
                    <option value="跨4">跨4</option>
                    <option value="跨5">跨5</option>
                    <option value="跨6">跨6</option>
                    <option value="跨7">跨7</option>
                    <option value="跨8">跨8</option>
                    <option value="跨3A">跨3A</option>
                    <option value="跨1">跨1</option>
                    <option value="跨2">跨2</option>
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
                area: '',
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
                        self.area = '';
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