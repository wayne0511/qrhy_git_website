(function(){$(function(){var r,e,i,l,c,n;return l=$("#form-post"),n=1,c=l.find("#product_variations"),l.find(".content-frame-body > .c-field-group:last").after(c.removeClass("hidden")),c.on("click",".product_variation_photo_link",function(){var e;return e=$(this).prev(),$.fn.upload_filemanager({formats:"image",dimension:e.attr("data-dimension")||"",versions:e.attr("data-versions")||"",thumb_size:e.attr("data-thumb_size")||"",selected:function(t){return e.val(t.url)}}),!1}),e=c.find(".blank_product_variation").remove().clone().removeClass("hidden"),r=e.find(".sortable_values > li:first").remove().clone(),c.find(".add_new_variation").click(function(){var t;return t=e.clone().attr("data-id","new_"+(n+=1)),c.children(".variations_sortable").append(t),t.trigger("fill_variation_id"),i(),!1}),c.on("click",".add_new_value",function(){var t,e;return t=r.clone(),e=$(this).closest(".product_variation").attr("data-id"),t.find("input, select").each(function(){return $(this).attr("name",$(this).attr("name").replace("[]","["+e+"]")).removeAttr("id")}),$(this).closest(".variation_attributes").find(".sortable_values").append(t),t.find(".product_attribute_select").trigger("change"),!1}),c.on("change",".product_attribute_select",function(){var n,t,e,r,a,i,o;for(i=$(this).val(),a=$(this).closest(".row").find(".product_attribute_vals_select").html(""),r=[],t=0,e=PRODUCT_ATTRIBUTES.length;t<e;t++)(n=PRODUCT_ATTRIBUTES[t]).id==i?r.push(function(){var t,e,r,i;for(i=[],t=0,e=(r=n.translated_values).length;t<e;t++)o=r[t],i.push(a.append('<option value="'+o.id+'">'+o.label.replace(/</g,"&lt;")+"</option>"));return i}()):r.push(void 0);return r}),c.on("fill_variation_id",".product_variation",function(){var t;return t=$(this).attr("data-id"),$(this).find("input, select").each(function(){return $(this).attr("name",$(this).attr("name").replace("[]","["+t+"]")).removeAttr("id")}),$(this).find(".sortable_values").sortable({handle:".val_sorter"})}),c.find(".sortable_values").sortable({handle:".val_sorter"}),c.find(".variations_sortable").sortable({handle:".variation_sorter",update:function(){return $(this).children().each(function(t){return $(this).find(".product_variation_position").val(t)})}}),c.on("click",".val_del",function(){return $(this).closest("li").fadeOut("slow",function(){return $(this).remove()}),!1}),c.on("click",".var_del",function(){return confirm(c.attr("data-confirm-msg"))&&$(this).closest(".product_variation").fadeOut("slow",function(){return $(this).remove(),i()}),!1}),(i=function(){var t,e,r,i,n,a,o,s,d;if(t=["ecommerce_sku","ecommerce_price","ecommerce_weight","ecommerce_stock","ecommerce_qty","ecommerce_photos"],0<c.find(".product_variation").length){for(s=[],e=0,n=t.length;e<n;e++)i=t[e],o=l.find('.c-field-group .item-custom-field[data-field-key="'+i+'"]'),s.push(o.hide().find(".required").addClass("e_skip_required").removeClass("required"));return s}for(d=[],r=0,a=t.length;r<a;r++)i=t[r],o=l.find('.c-field-group .item-custom-field[data-field-key="'+i+'"]'),d.push(o.show().find(".e_skip_required").removeClass("e_skip_required").addClass("required"));return d})()})}).call(this);