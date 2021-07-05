
$(document).ready(function() {
    var list =    $(".category-filter-wrap ul li");
    list.click(function(){
        if(this.childElementCount > 0){
            $(this).toggleClass('show-menu');
        }
    });

    $(".category-filter-wrap ul li").children("ul").parent().addClass("caret")

})