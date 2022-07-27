class CartSerializer < ActiveModel::Serializer
  attributes :id, :user_id

  has_many :cart_foods
end
