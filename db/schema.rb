# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180411092215) do

  create_table "cama_comments", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "author"
    t.string "author_email"
    t.string "author_url"
    t.string "author_IP"
    t.text "content"
    t.string "approved", default: "pending"
    t.string "agent"
    t.string "typee"
    t.integer "comment_parent"
    t.integer "post_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["approved"], name: "index_cama_comments_on_approved"
    t.index ["comment_parent"], name: "index_cama_comments_on_comment_parent"
    t.index ["post_id"], name: "index_cama_comments_on_post_id"
    t.index ["user_id"], name: "index_cama_comments_on_user_id"
  end

  create_table "cama_custom_fields", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "object_class"
    t.string "name"
    t.string "slug"
    t.integer "objectid"
    t.integer "parent_id"
    t.integer "field_order"
    t.integer "count", default: 0
    t.boolean "is_repeat", default: false
    t.text "description"
    t.string "status"
    t.index ["object_class"], name: "index_cama_custom_fields_on_object_class"
    t.index ["objectid"], name: "index_cama_custom_fields_on_objectid"
    t.index ["parent_id"], name: "index_cama_custom_fields_on_parent_id"
    t.index ["slug"], name: "index_cama_custom_fields_on_slug"
  end

  create_table "cama_custom_fields_relationships", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "objectid"
    t.integer "custom_field_id"
    t.integer "term_order"
    t.string "object_class"
    t.text "value", limit: 4294967295
    t.string "custom_field_slug"
    t.integer "group_number", default: 0
    t.index ["custom_field_id"], name: "index_cama_custom_fields_relationships_on_custom_field_id"
    t.index ["custom_field_slug"], name: "index_cama_custom_fields_relationships_on_custom_field_slug"
    t.index ["object_class"], name: "index_cama_custom_fields_relationships_on_object_class"
    t.index ["objectid"], name: "index_cama_custom_fields_relationships_on_objectid"
  end

  create_table "cama_metas", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "key"
    t.text "value", limit: 4294967295
    t.integer "objectid"
    t.string "object_class"
    t.index ["key"], name: "index_cama_metas_on_key"
    t.index ["object_class"], name: "index_cama_metas_on_object_class"
    t.index ["objectid"], name: "index_cama_metas_on_objectid"
  end

  create_table "cama_posts", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "title"
    t.string "slug"
    t.text "content", limit: 4294967295
    t.text "content_filtered", limit: 4294967295
    t.string "status", default: "published"
    t.datetime "published_at"
    t.integer "post_parent"
    t.string "visibility", default: "public"
    t.text "visibility_value"
    t.string "post_class", default: "Post"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.integer "post_order", default: 0
    t.integer "taxonomy_id"
    t.boolean "is_feature", default: false
    t.index ["post_class"], name: "index_cama_posts_on_post_class"
    t.index ["post_parent"], name: "index_cama_posts_on_post_parent"
    t.index ["slug"], name: "index_cama_posts_on_slug"
    t.index ["status"], name: "index_cama_posts_on_status"
    t.index ["user_id"], name: "index_cama_posts_on_user_id"
  end

  create_table "cama_term_relationships", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "objectid"
    t.integer "term_order"
    t.integer "term_taxonomy_id"
    t.index ["objectid"], name: "index_cama_term_relationships_on_objectid"
    t.index ["term_order"], name: "index_cama_term_relationships_on_term_order"
    t.index ["term_taxonomy_id"], name: "index_cama_term_relationships_on_term_taxonomy_id"
  end

  create_table "cama_term_taxonomy", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "taxonomy"
    t.text "description", limit: 4294967295
    t.integer "parent_id"
    t.integer "count"
    t.string "name"
    t.string "slug"
    t.integer "term_group"
    t.integer "term_order"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["parent_id"], name: "index_cama_term_taxonomy_on_parent_id"
    t.index ["slug"], name: "index_cama_term_taxonomy_on_slug"
    t.index ["taxonomy"], name: "index_cama_term_taxonomy_on_taxonomy"
    t.index ["term_order"], name: "index_cama_term_taxonomy_on_term_order"
    t.index ["user_id"], name: "index_cama_term_taxonomy_on_user_id"
  end

  create_table "cama_users", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "username"
    t.string "role", default: "client"
    t.string "email"
    t.string "slug"
    t.string "password_digest"
    t.string "auth_token"
    t.string "password_reset_token"
    t.integer "parent_id"
    t.datetime "password_reset_sent_at"
    t.datetime "last_login_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "site_id", default: -1
    t.string "confirm_email_token"
    t.datetime "confirm_email_sent_at"
    t.boolean "is_valid_email", default: true
    t.string "first_name"
    t.string "last_name"
    t.index ["email"], name: "index_cama_users_on_email"
    t.index ["role"], name: "index_cama_users_on_role"
    t.index ["site_id"], name: "index_cama_users_on_site_id"
    t.index ["username"], name: "index_cama_users_on_username"
  end

  create_table "plugins_attacks", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "path"
    t.string "browser_key"
    t.bigint "site_id"
    t.datetime "created_at"
    t.index ["browser_key"], name: "index_plugins_attacks_on_browser_key"
    t.index ["path"], name: "index_plugins_attacks_on_path"
    t.index ["site_id"], name: "index_plugins_attacks_on_site_id"
  end

  create_table "plugins_contact_forms", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "site_id"
    t.integer "count"
    t.integer "parent_id"
    t.string "name"
    t.string "slug"
    t.text "description"
    t.text "value"
    t.text "settings"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "plugins_ecommerce_attributes", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "key"
    t.string "label"
    t.integer "parent_id"
    t.integer "site_id"
    t.integer "position", default: 0
    t.index ["parent_id"], name: "index_plugins_ecommerce_attributes_on_parent_id"
    t.index ["site_id"], name: "index_plugins_ecommerce_attributes_on_site_id"
  end

  create_table "plugins_ecommerce_orders", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "name"
    t.string "slug"
    t.string "kind"
    t.string "coupon"
    t.string "the_coupon_amount"
    t.string "currency_code"
    t.string "payment_data"
    t.string "status", default: "unpaid"
    t.integer "shipping_method_id"
    t.integer "user_id"
    t.integer "site_id"
    t.integer "payment_method_id"
    t.timestamp "paid_at"
    t.timestamp "received_at"
    t.timestamp "accepted_at"
    t.timestamp "shipped_at"
    t.timestamp "closed_at"
    t.string "cache_the_total"
    t.string "cache_the_sub_total"
    t.string "cache_the_tax"
    t.string "cache_the_weight"
    t.string "cache_the_discounts"
    t.string "cache_the_shipping"
    t.decimal "amount", precision: 8, scale: 2
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "visitor_key"
    t.string "invoice_number", default: ""
    t.string "invoice_path", default: ""
    t.index ["payment_method_id"], name: "index_plugins_ecommerce_orders_on_payment_method_id"
    t.index ["shipping_method_id"], name: "index_plugins_ecommerce_orders_on_shipping_method_id"
    t.index ["site_id"], name: "index_plugins_ecommerce_orders_on_site_id"
    t.index ["user_id"], name: "index_plugins_ecommerce_orders_on_user_id"
  end

  create_table "plugins_ecommerce_product_variations", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.decimal "amount", precision: 8, scale: 2
    t.integer "product_id"
    t.string "photo"
    t.string "sku"
    t.integer "weight"
    t.integer "position", default: 0
    t.integer "qty", default: 0
    t.string "attribute_ids"
    t.index ["product_id"], name: "index_plugins_ecommerce_product_variations_on_product_id"
  end

  create_table "plugins_ecommerce_products", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "qty"
    t.integer "product_id"
    t.integer "order_id"
    t.string "cache_the_price"
    t.string "cache_the_title"
    t.string "cache_the_tax"
    t.string "cache_the_sub_total"
    t.integer "variation_id"
    t.index ["order_id"], name: "index_plugins_ecommerce_products_on_order_id"
    t.index ["product_id"], name: "index_plugins_ecommerce_products_on_product_id"
    t.index ["qty"], name: "index_plugins_ecommerce_products_on_qty"
  end

  create_table "plugins_order_details", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "order_id"
    t.string "customer"
    t.string "email"
    t.string "phone"
    t.datetime "received_at"
    t.datetime "accepted_at"
    t.datetime "shipped_at"
    t.datetime "closed_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "plugins_subscriber_group_items", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "group_id"
    t.integer "item_id"
    t.string "status", default: "active"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["group_id"], name: "index_plugins_subscriber_group_items_on_group_id"
    t.index ["item_id"], name: "index_plugins_subscriber_group_items_on_item_id"
  end

  create_table "plugins_subscriber_groups", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "name"
    t.string "key"
    t.boolean "send_welcome"
    t.string "welcome_subject"
    t.text "welcome_msg"
    t.boolean "send_left_group"
    t.string "left_subject"
    t.text "left_msg"
    t.integer "site_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["site_id"], name: "index_plugins_subscriber_groups_on_site_id"
  end

  create_table "plugins_subscriber_items", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "name"
    t.string "email"
    t.string "status", default: "approved"
    t.datetime "unsubscribed_at"
    t.integer "site_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["site_id"], name: "index_plugins_subscriber_items_on_site_id"
  end

  create_table "plugins_subscriber_promotion_groups", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "promotion_id"
    t.integer "group_id"
    t.index ["group_id"], name: "index_plugins_subscriber_promotion_groups_on_group_id"
    t.index ["promotion_id"], name: "index_plugins_subscriber_promotion_groups_on_promotion_id"
  end

  create_table "plugins_subscriber_promotion_items", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "promotion_id"
    t.integer "item_id"
    t.integer "qty_opened", default: 0
    t.string "status", default: "pending"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["item_id"], name: "index_plugins_subscriber_promotion_items_on_item_id"
    t.index ["promotion_id"], name: "index_plugins_subscriber_promotion_items_on_promotion_id"
  end

  create_table "plugins_subscriber_promotions", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "name"
    t.string "key"
    t.string "layout"
    t.string "template"
    t.string "email_from"
    t.string "email_cc"
    t.string "subject"
    t.text "content"
    t.string "status", default: "pending"
    t.integer "site_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["site_id"], name: "index_plugins_subscriber_promotions_on_site_id"
  end

end
