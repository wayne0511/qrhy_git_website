!function($){"use strict";var n=function(e,t){this.options=t,this.$element=$(e),this.$container=$("<div/>",{"class":"ms-container"}),this.$selectableContainer=$("<div/>",{"class":"ms-selectable"}),this.$selectionContainer=$("<div/>",{"class":"ms-selection"}),this.$selectableUl=$("<ul/>",{"class":"ms-list",tabindex:"-1"}),this.$selectionUl=$("<ul/>",{"class":"ms-list",tabindex:"-1"}),this.scrollTo=0,this.elemsSelector="li:visible:not(.ms-optgroup-label,.ms-optgroup-container,."+t.disabledClass+")"};n.prototype={constructor:n,init:function(){var e=this,t=this.$element;if(0===t.next(".ms-container").length){t.css({position:"absolute",left:"-9999px"}),t.attr("id",t.attr("id")?t.attr("id"):Math.ceil(1e3*Math.random())+"multiselect"),this.$container.attr("id","ms-"+t.attr("id")),this.$container.addClass(e.options.cssClass),t.find("option").each(function(){e.generateLisFromOption(this)}),this.$selectionUl.find(".ms-optgroup-label").hide(),e.options.selectableHeader&&e.$selectableContainer.append(e.options.selectableHeader),e.$selectableContainer.append(e.$selectableUl),e.options.selectableFooter&&e.$selectableContainer.append(e.options.selectableFooter),e.options.selectionHeader&&e.$selectionContainer.append(e.options.selectionHeader),e.$selectionContainer.append(e.$selectionUl),e.options.selectionFooter&&e.$selectionContainer.append(e.options.selectionFooter),e.$container.append(e.$selectableContainer),e.$container.append(e.$selectionContainer),t.after(e.$container),e.activeMouse(e.$selectableUl),e.activeKeyboard(e.$selectableUl);var s=e.options.dblClick?"dblclick":"click";e.$selectableUl.on(s,".ms-elem-selectable",function(){e.select($(this).data("ms-value"))}),e.$selectionUl.on(s,".ms-elem-selection",function(){e.deselect($(this).data("ms-value"))}),e.activeMouse(e.$selectionUl),e.activeKeyboard(e.$selectionUl),t.on("focus",function(){e.$selectableUl.focus()})}var l=t.find("option:selected").map(function(){return $(this).val()}).get();e.select(l,"init"),"function"==typeof e.options.afterInit&&e.options.afterInit.call(this,this.$container)},generateLisFromOption:function(e,t){for(var s=this,l=s.$element,i="",n=$(e),o=0;o<e.attributes.length;o++){var a=e.attributes[o];"value"!==a.name&&"disabled"!==a.name&&(i+=a.name+'="'+a.value+'" ')}var r=$("<li "+i+"><span>"+s.escapeHTML(n.text())+"</span></li>"),c=r.clone(),d=n.val(),h=s.sanitize(d);r.data("ms-value",d).addClass("ms-elem-selectable").attr("id",h+"-selectable"),c.data("ms-value",d).addClass("ms-elem-selection").attr("id",h+"-selection").hide(),(n.prop("disabled")||l.prop("disabled"))&&(c.addClass(s.options.disabledClass),r.addClass(s.options.disabledClass));var p=n.parent("optgroup");if(0<p.length){var f=p.attr("label"),u=s.sanitize(f),m=s.$selectableUl.find("#optgroup-selectable-"+u),v=s.$selectionUl.find("#optgroup-selection-"+u);if(0===m.length){var b='<li class="ms-optgroup-container"></li>',g='<ul class="ms-optgroup"><li class="ms-optgroup-label"><span>'+f+"</span></li></ul>";m=$(b),v=$(b),m.attr("id","optgroup-selectable-"+u),v.attr("id","optgroup-selection-"+u),m.append($(g)),v.append($(g)),s.options.selectableOptgroup&&(m.find(".ms-optgroup-label").on("click",function(){var e=p.children(":not(:selected, :disabled)").map(function(){return $(this).val()}).get();s.select(e)}),v.find(".ms-optgroup-label").on("click",function(){var e=p.children(":selected:not(:disabled)").map(function(){return $(this).val()}).get();s.deselect(e)})),s.$selectableUl.append(m),s.$selectionUl.append(v)}t=t==undefined?m.find("ul").children().length:t+1,r.insertAt(t,m.children()),c.insertAt(t,v.children())}else t=t==undefined?s.$selectableUl.children().length:t,r.insertAt(t,s.$selectableUl),c.insertAt(t,s.$selectionUl)},addOption:function(e){var i=this;e.value!==undefined&&null!==e.value&&(e=[e]),$.each(e,function(e,t){if(t.value!==undefined&&null!==t.value&&0===i.$element.find("option[value='"+t.value+"']").length){var s=$('<option value="'+t.value+'">'+t.text+"</option>"),l=(e=parseInt("undefined"==typeof t.index?i.$element.children().length:t.index),t.nested==undefined?i.$element:$("optgroup[label='"+t.nested+"']"));s.insertAt(e,l),i.generateLisFromOption(s.get(0),e,t.nested)}})},escapeHTML:function(e){return $("<div>").text(e).html()},activeKeyboard:function(s){var l=this;s.on("focus",function(){$(this).addClass("ms-focus")}).on("blur",function(){$(this).removeClass("ms-focus")}).on("keydown",function(e){switch(e.which){case 40:case 38:return e.preventDefault(),e.stopPropagation(),void l.moveHighlight($(this),38===e.which?-1:1);case 37:case 39:return e.preventDefault(),e.stopPropagation(),void l.switchList(s);case 9:if(l.$element.is("[tabindex]")){e.preventDefault();var t=parseInt(l.$element.attr("tabindex"),10);return t=e.shiftKey?t-1:t+1,void $('[tabindex="'+t+'"]').focus()}e.shiftKey&&l.$element.trigger("focus")}if(-1<$.inArray(e.which,l.options.keySelect))return e.preventDefault(),e.stopPropagation(),void l.selectHighlighted(s)})},moveHighlight:function(e,t){var s=e.find(this.elemsSelector),l=s.filter(".ms-hover"),i=null,n=s.first().outerHeight(),o=e.height();this.$container.prop("id");if(s.removeClass("ms-hover"),1===t){if(0===(i=l.nextAll(this.elemsSelector).first()).length)if((r=l.parent()).hasClass("ms-optgroup")){var a=r.parent().next(":visible");i=0<a.length?a.find(this.elemsSelector).first():s.first()}else i=s.first()}else if(-1===t){var r;if(0===(i=l.prevAll(this.elemsSelector).first()).length)if((r=l.parent()).hasClass("ms-optgroup")){var c=r.parent().prev(":visible");i=0<c.length?c.find(this.elemsSelector).last():s.last()}else i=s.last()}if(0<i.length){i.addClass("ms-hover");var d=e.scrollTop()+i.position().top-o/2+n/2;e.scrollTop(d)}},selectHighlighted:function(e){var t=e.find(this.elemsSelector),s=t.filter(".ms-hover").first();0<s.length&&(e.parent().hasClass("ms-selectable")?this.select(s.data("ms-value")):this.deselect(s.data("ms-value")),t.removeClass("ms-hover"))},switchList:function(e){e.blur(),this.$container.find(this.elemsSelector).removeClass("ms-hover"),e.parent().hasClass("ms-selectable")?this.$selectionUl.focus():this.$selectableUl.focus()},activeMouse:function(){var e=this;this.$container.on("mouseenter",e.elemsSelector,function(){$(this).parents(".ms-container").find(e.elemsSelector).removeClass("ms-hover"),$(this).addClass("ms-hover")}),this.$container.on("mouseleave",e.elemsSelector,function(){$(this).parents(".ms-container").find(e.elemsSelector).removeClass("ms-hover")})},refresh:function(){this.destroy(),this.$element.multiSelect(this.options)},destroy:function(){$("#ms-"+this.$element.attr("id")).remove(),this.$element.css("position","").css("left",""),this.$element.removeData("multiselect")},select:function(e,t){"string"==typeof e&&(e=[e]);var s=this,l=this.$element,i=$.map(e,function(e){return s.sanitize(e)}),n=this.$selectableUl.find("#"+i.join("-selectable, #")+"-selectable").filter(":not(."+s.options.disabledClass+")"),o=this.$selectionUl.find("#"+i.join("-selection, #")+"-selection").filter(":not(."+s.options.disabledClass+")"),a=l.find("option:not(:disabled)").filter(function(){return-1<$.inArray(this.value,e)});if("init"===t&&(n=this.$selectableUl.find("#"+i.join("-selectable, #")+"-selectable"),o=this.$selectionUl.find("#"+i.join("-selection, #")+"-selection")),0<n.length){n.addClass("ms-selected").hide(),o.addClass("ms-selected").show(),a.prop("selected",!0),s.$container.find(s.elemsSelector).removeClass("ms-hover");var r=s.$selectableUl.children(".ms-optgroup-container");if(0<r.length)r.each(function(){var e=$(this).find(".ms-elem-selectable");e.length===e.filter(".ms-selected").length&&$(this).find(".ms-optgroup-label").hide()}),s.$selectionUl.children(".ms-optgroup-container").each(function(){0<$(this).find(".ms-elem-selection").filter(".ms-selected").length&&$(this).find(".ms-optgroup-label").show()});else if(s.options.keepOrder&&"init"!==t){var c=s.$selectionUl.find(".ms-selected");1<c.length&&c.last().get(0)!=o.get(0)&&o.insertAfter(c.last())}"init"!==t&&(l.trigger("change"),"function"==typeof s.options.afterSelect&&s.options.afterSelect.call(this,e))}},deselect:function(e){"string"==typeof e&&(e=[e]);var t=this,s=this.$element,l=$.map(e,function(e){return t.sanitize(e)}),i=this.$selectableUl.find("#"+l.join("-selectable, #")+"-selectable"),n=this.$selectionUl.find("#"+l.join("-selection, #")+"-selection").filter(".ms-selected").filter(":not(."+t.options.disabledClass+")"),o=s.find("option").filter(function(){return-1<$.inArray(this.value,e)});if(0<n.length){i.removeClass("ms-selected").show(),n.removeClass("ms-selected").hide(),o.prop("selected",!1),t.$container.find(t.elemsSelector).removeClass("ms-hover");var a=t.$selectableUl.children(".ms-optgroup-container");if(0<a.length)a.each(function(){0<$(this).find(".ms-elem-selectable").filter(":not(.ms-selected)").length&&$(this).find(".ms-optgroup-label").show()}),t.$selectionUl.children(".ms-optgroup-container").each(function(){0===$(this).find(".ms-elem-selection").filter(".ms-selected").length&&$(this).find(".ms-optgroup-label").hide()});s.trigger("change"),"function"==typeof t.options.afterDeselect&&t.options.afterDeselect.call(this,e)}},select_all:function(){var e=this.$element,t=e.val();if(e.find('option:not(":disabled")').prop("selected",!0),this.$selectableUl.find(".ms-elem-selectable").filter(":not(."+this.options.disabledClass+")").addClass("ms-selected").hide(),this.$selectionUl.find(".ms-optgroup-label").show(),this.$selectableUl.find(".ms-optgroup-label").hide(),this.$selectionUl.find(".ms-elem-selection").filter(":not(."+this.options.disabledClass+")").addClass("ms-selected").show(),this.$selectionUl.focus(),e.trigger("change"),"function"==typeof this.options.afterSelect){var s=$.grep(e.val(),function(e){return $.inArray(e,t)<0});this.options.afterSelect.call(this,s)}},deselect_all:function(){var e=this.$element,t=e.val();e.find("option").prop("selected",!1),this.$selectableUl.find(".ms-elem-selectable").removeClass("ms-selected").show(),this.$selectionUl.find(".ms-optgroup-label").hide(),this.$selectableUl.find(".ms-optgroup-label").show(),this.$selectionUl.find(".ms-elem-selection").removeClass("ms-selected").hide(),this.$selectableUl.focus(),e.trigger("change"),"function"==typeof this.options.afterDeselect&&this.options.afterDeselect.call(this,t)},sanitize:function(e){var t,s=0;if(0==e.length)return s;var l=0;for(t=0,l=e.length;t<l;t++)s=(s<<5)-s+e.charCodeAt(t),s|=0;return s}},$.fn.multiSelect=function(e){var l=e,i=arguments;return this.each(function(){var e=$(this),t=e.data("multiselect"),s=$.extend({},$.fn.multiSelect.defaults,e.data(),"object"==typeof l&&l);t||e.data("multiselect",t=new n(this,s)),"string"==typeof l?t[l](i[1]):t.init()})},$.fn.multiSelect.defaults={keySelect:[32],selectableOptgroup:!1,disabledClass:"disabled",dblClick:!1,keepOrder:!1,cssClass:""},$.fn.multiSelect.Constructor=n,$.fn.insertAt=function(e,t){return this.each(function(){0===e?t.prepend(this):t.children().eq(e-1).after(this)})}}(window.jQuery);