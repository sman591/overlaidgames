class CreateOverlays < ActiveRecord::Migration
  def change
    create_table :overlays do |t|
      t.string :title
      t.string :slug
      t.string :file
      t.integer :uses
      t.boolean :enabled

      t.timestamps
    end
  end
end
