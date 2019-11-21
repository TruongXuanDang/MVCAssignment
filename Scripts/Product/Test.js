$(document).ready(function () {
    $("#btn-Search").click(function (e) {
        var name = $("input[name='name']").val();
        //var categoryId = $("input[name='category']").val();
        var categoryId = $("#category option:selected").val();
        $.ajax({
            url: `/Products/Search?name=${name}&categoryId=${categoryId}`,
            type: 'POST',
            success: function (response) {
                $("table").html(response);
            }
        });
        e.preventDefault();
        return false;
    });

    $(":input").bind('keyup mouseup', function () {
        //alert($(this).val());
        //alert(this.className);
        var newQuantity = $(this).val();
        var productId = parseInt(this.className);
        $.ajax({
            url: `/Cart/UpdateCart?newQuantity=${newQuantity}&productId=${productId}`,
            type: 'POST'
        });

    });
}) 