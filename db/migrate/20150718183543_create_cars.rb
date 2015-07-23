class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.string :name
      t.string :make
      t.string :model
      t.string :engine
      t.string :exterior
      t.string :interior
      t.string :delivery_kms
      t.string :stock_num
      t.decimal :msrp, :precision => 9, :scale => 2
      t.text :additional_fees
      t.decimal :base_price, :precision => 9, :scale => 2
      t.belongs_to :user, index: true
      t.timestamps null: false
    end
  end
end
