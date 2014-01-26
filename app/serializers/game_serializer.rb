class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :slug, :file, :width, :height, :custom_embed, :embed_code, :views, :enabled
end
