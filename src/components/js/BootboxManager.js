class BootboxManager {
    showNormalMessage(msg) {
        bootbox.alert({
            message: msg,
            size: 'small'
        });
    }

    showErrorMessage(msg) {
        bootbox.alert({
            message: msg,
            size: 'normal',
            buttons: {
                ok: {
                    label: '取消',
                    className: 'btn-danger'
                }
            }
        });
    }

    showLoadingDialog() {
        var dialog = bootbox.dialog({
            message: '<div class="text-center"><i class="fa fa-spin fa-spinner"></i> Loading...</div>',
            closeButton: false
        });
        return dialog;
    }

    showSuccessMessage(msg) {
        bootbox.alert({
            message: msg,
            size: 'normal',
            buttons: {
                ok: {
                    label: '确定',
                    className: 'btn-success'
                }
            }
        });
    }

    showConfirmMessage(msg, callback) {
        bootbox.confirm({
            size: "small",
            message: msg,
            buttons: {
                ok: {
                    label: '已登录',
                    className: 'btn-success'
                },
                cancel: {
                    label: '取消',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                callback(result);
            }
        })
    }
}

export default BootboxManager