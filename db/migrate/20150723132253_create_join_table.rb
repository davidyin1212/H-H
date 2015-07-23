class CreateJoinTable < ActiveRecord::Migration
  def change
    create_join_table :users, :permissions do |t|
      t.index :user_id
      t.index :permission_id
    end
  end
end
