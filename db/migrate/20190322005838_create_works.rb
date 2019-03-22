class CreateWorks < ActiveRecord::Migration[5.2]
  def change
    create_table :works do |t|
      t.string :name
      t.string :image_url
      t.string :web_url

      t.timestamps
    end
  end
end
