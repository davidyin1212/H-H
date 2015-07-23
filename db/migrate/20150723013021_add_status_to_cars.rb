class AddStatusToCars < ActiveRecord::Migration
  def change
    add_column :cars, :status, :integer
  end
end
