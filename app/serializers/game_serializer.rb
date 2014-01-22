class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :slug, :file, :custom_embed, :embed_code, :views, :enabled
end
