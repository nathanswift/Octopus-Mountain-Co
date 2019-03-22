rongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_03_22_010552) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reviews", force: :cascade do |t|
    t.string "author"
    t.string "body"
    t.integer "star_count"
    t.string "site_name"
    t.string "icon"
    t.string "site_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "works", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "web_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
