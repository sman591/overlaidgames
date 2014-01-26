class ChangeFileToSrc < ActiveRecord::Migration
  def change
    rename_column :games, :file, :src
    rename_column :backgrounds, :file, :src
  end
end
