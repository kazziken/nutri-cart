class CartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :created_at

  has_many :cart_foods
  has_many :foods, through: :cart_foods
end
