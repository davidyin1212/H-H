class CreateUserGroupJoinPermissionTable < ActiveRecord::Migration
  def change
    create_join_table :permissions, :user_groups do |t|
      t.index :permission_id
      t.index :user_group_id
    end
  end
end
