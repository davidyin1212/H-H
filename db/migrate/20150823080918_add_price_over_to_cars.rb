class AddPriceOverToCars < ActiveRecord::Migration
  def change
    add_column :cars, :price_over, :decimal, :precision => 9, :scale => 2
  end
end
