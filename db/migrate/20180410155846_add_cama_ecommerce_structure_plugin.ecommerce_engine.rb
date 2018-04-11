# This migration comes from ecommerce_engine (originally 20160502221327)
class AddCamaEcommerceStructurePlugin < CamaManager.migration_class
  def change
    unless table_exists? 'plugins_order_details'
      create_table :plugins_order_details do |t|
        t.integer :order_id
        t.string :customer, :email, :phone
        t.datetime :received_at, :accepted_at, :shipped_at, :closed_at
        t.timestamps
      end
    end
  end
end
