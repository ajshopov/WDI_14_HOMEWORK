class Project < ApplicationRecord
  mount_uploader :preview, PreviewUploader

  belongs_to :user
  has_many :comments
  has_many :likes
end
