class AddImageUrlToCars < ActiveRecord::Migration
  def change
    add_column :cars, :image_url, :string
  end
end
