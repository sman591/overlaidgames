class RenameOverlaysToBackgrounds < ActiveRecord::Migration
  def change
    rename_table :overlays, :backgrounds
  end
end
