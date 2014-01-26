class BackgroundSerializer < ActiveModel::Serializer
  attributes :id, :title, :slug, :src, :uses, :enabled
end
