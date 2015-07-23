class RemovePermissionLvlFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :permission_lvl, :integer
  end
end
