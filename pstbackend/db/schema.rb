# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_20_115630) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "foods", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "img_url"
  end

  create_table "liked_foods", force: :cascade do |t|
    t.bigint "food_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["food_id"], name: "index_liked_foods_on_food_id"
    t.index ["user_id"], name: "index_liked_foods_on_user_id"
  end

  create_table "liked_restaurants", force: :cascade do |t|
    t.bigint "restaurant_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["restaurant_id"], name: "index_liked_restaurants_on_restaurant_id"
    t.index ["user_id"], name: "index_liked_restaurants_on_user_id"
  end

  create_table "restaurant_foods", force: :cascade do |t|
    t.bigint "food_id", null: false
    t.bigint "restaurant_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["food_id"], name: "index_restaurant_foods_on_food_id"
    t.index ["restaurant_id"], name: "index_restaurant_foods_on_restaurant_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "apple_url"
    t.string "website"
    t.string "ig_url"
    t.string "ig"
    t.float "lat"
    t.float "lng"
    t.string "pst_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "liked_foods", "foods"
  add_foreign_key "liked_foods", "users"
  add_foreign_key "liked_restaurants", "restaurants"
  add_foreign_key "liked_restaurants", "users"
  add_foreign_key "restaurant_foods", "foods"
  add_foreign_key "restaurant_foods", "restaurants"
end
