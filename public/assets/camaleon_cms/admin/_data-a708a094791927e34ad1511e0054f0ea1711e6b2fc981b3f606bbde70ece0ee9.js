function cama_get_tinymce_settings(e){e||(e={});var t={selector:".tinymce_textarea",plugins:"advlist autolink lists link image charmap print preview hr anchor pagebreak searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking save table contextmenu directionality emoticons template paste textcolor colorpicker textpattern filemanager",menubar:"edit insert view format table tools",image_advtab:!0,statusbar:!0,paste:!0,toolbar_items_size:"small",content_css:tinymce_global_settings.custom_css.join(","),convert_urls:!1,extended_valid_elements:"i[*],div[*],p[*],li[*],a[*],ol[*],ul[*],span[*]",toolbar:"bold italic | alignleft aligncenter alignright alignjustify | fontselect fontsizeselect | bullist numlist | outdent indent | undo redo | link unlink image media | forecolor backcolor | styleselect template "+tinymce_global_settings.custom_toolbar.join(","),image_caption:!0,language:CURRENT_LOCALE,relative_urls:!1,remove_script_host:!1,browser_spellcheck:!0,language_url:tinymce_global_settings.language_url,file_browser_callback:function(t,e,n){$.fn.upload_filemanager({formats:n,selected:function(e){$("#"+t).val(e.url)}})},setup:function(t){for(var e in t.on("blur",function(){tinymce.triggerSave(),$("textarea#"+t.id).trigger("change")}),t.on("PostProcess",function(e){e.content=e.content.replace(/(<p><\/p>)/gi,"<br />")}),t.addMenuItem("append_line",{text:"New line at the end",context:"insert",onclick:function(){t.dom.add(t.getBody(),"p",{},"-New line-")}}),t.addMenuItem("add_line",{text:"New line",context:"insert",onclick:function(){t.insertContent("<p>-New line-</p>")}}),tinymce_global_settings.setups)tinymce_global_settings.setups[e](t);t.on("postRender",function(){for(var e in t.settings.onPostRender(t),tinymce_global_settings.post_render)tinymce_global_settings.post_render[e](t)}),t.on("init",function(){for(var e in tinymce_global_settings.init)tinymce_global_settings.init[e](t)})},onPostRender:function(){}};for(var n in tinymce_global_settings.settings)tinymce_global_settings.settings[n](e,t);return $.extend({},t,e)}