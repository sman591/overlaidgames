class BackgroundSerializer < ActiveModel::Serializer
  attributes :id, :title, :slug, :file, :uses, :enabled
end
