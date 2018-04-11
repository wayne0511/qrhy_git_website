(function() {
  window['cama_init_posttype_form'] = function() {
    var cat_checks, form;
    form = $("#post_type_form");
    form.find('.unput_upload').input_upload();
    form.find("[name='meta[has_parent_structure]']").change(function() {
      var item;
      item = form.find("#meta_contents_route_format_hierarchy_post");
      item.parent().siblings().find("input").prop("disabled", $(this).is(":checked"));
      if ($(this).is(":checked")) {
        return item.prop("checked", true).prop("disabled", false);
      } else {
        return item.prop("disabled", true);
      }
    }).trigger("change");
    form.find('[name="meta[has_picture]"]').change(function() {
      var items;
      items = form.find('.picture_settings input');
      if ($(this).is(":checked")) {
        return items.prop("disabled", false);
      } else {
        return items.prop("disabled", true);
      }
    }).trigger("change");
    cat_checks = form.find('input:checkbox[name="meta[has_category]"], input:checkbox[name="meta[has_single_category]"]');
    return cat_checks.change(function() {
      if ($(this).is(':checked')) {
        return cat_checks.not(this).prop("checked", false);
      }
    }).filter(':checked').trigger('change');
  };

}).call(this);
