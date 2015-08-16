class CreatePayments < ActiveRecord::Migration
  def change
    create_table :payments do |t|
      t.belongs_to :user, index: true
      t.string :email
      t.string :stripe_customer_token

      t.timestamps null: false
    end
  end
end
