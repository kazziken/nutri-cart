class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email, :avatar

  has_many :carts
  has_many :cart_foods, through: :carts
end
