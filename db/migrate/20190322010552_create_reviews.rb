class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :author
      t.string :body
      t.integer :star_count
      t.string :site_name
      t.string :icon
      t.string :site_url

      t.timestamps
    end
  end
end
