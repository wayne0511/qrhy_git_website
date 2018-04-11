# This migration comes from ecommerce_engine (originally 20160825174848)
class SetCamaPostDecoratorClass < CamaManager.migration_class
  def change
    CamaleonCms::Site.reset_column_information
    CamaleonCms::PostType.reset_column_information
    CamaleonCms::Site.find_each do |site|
      post_type = site.post_types.where(slug: 'commerce').first
      if post_type
        post_type.set_options(cama_post_decorator_class: 'Plugins::Ecommerce::ProductDecorator')
        post_type.save(validate: false)
      end
    end
  end
end
