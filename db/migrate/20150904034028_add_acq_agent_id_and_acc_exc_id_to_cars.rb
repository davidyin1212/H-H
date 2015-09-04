class AddAcqAgentIdAndAccExcIdToCars < ActiveRecord::Migration
  def change
    add_column :cars, :acq_agent_id, :integer
    add_index :cars, :acq_agent_id
    add_column :cars, :acc_exc_id, :integer
    add_index :cars, :acc_exc_id
  end
end
