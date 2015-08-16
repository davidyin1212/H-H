class AddChargeIdToCars < ActiveRecord::Migration
  def change
    add_column :cars, :charge_id, :string
  end
end
