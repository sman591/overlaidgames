class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title
      t.string :slug
      t.string :file
      t.boolean :custom_embed
      t.text :embed_code
      t.integer :views
      t.boolean :enabled

      t.timestamps
    end
  end
end
