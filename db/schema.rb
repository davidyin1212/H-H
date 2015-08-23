# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150823080918) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cars", force: :cascade do |t|
    t.string   "name"
    t.string   "make"
    t.string   "model"
    t.string   "engine"
    t.string   "exterior"
    t.string   "interior"
    t.string   "delivery_kms"
    t.string   "stock_num"
    t.decimal  "msrp",            precision: 9, scale: 2
    t.text     "additional_fees"
    t.decimal  "base_price",      precision: 9, scale: 2
    t.integer  "user_id"
    t.integer  "payment_id"
    t.datetime "created_at",                              null: false
    t.datetime "updated_at",                              null: false
    t.integer  "status"
    t.string   "charge_id"
    t.string   "image_url"
    t.decimal  "price_over",      precision: 9, scale: 2
  end

  add_index "cars", ["payment_id"], name: "index_cars_on_payment_id", using: :btree
  add_index "cars", ["user_id"], name: "index_cars_on_user_id", using: :btree

  create_table "payments", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "email"
    t.string   "stripe_customer_token"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
  end

  add_index "payments", ["user_id"], name: "index_payments_on_user_id", using: :btree

  create_table "permissions", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "permissions_user_groups", id: false, force: :cascade do |t|
    t.integer "permission_id", null: false
    t.integer "user_group_id", null: false
  end

  add_index "permissions_user_groups", ["permission_id"], name: "index_permissions_user_groups_on_permission_id", using: :btree
  add_index "permissions_user_groups", ["user_group_id"], name: "index_permissions_user_groups_on_user_group_id", using: :btree

  create_table "permissions_users", id: false, force: :cascade do |t|
    t.integer "user_id",       null: false
    t.integer "permission_id", null: false
  end

  add_index "permissions_users", ["permission_id"], name: "index_permissions_users_on_permission_id", using: :btree
  add_index "permissions_users", ["user_id"], name: "index_permissions_users_on_user_id", using: :btree

  create_table "user_groups", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.integer  "failed_attempts",        default: 5,  null: false
    t.string   "unlock_token"
    t.datetime "locked_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
