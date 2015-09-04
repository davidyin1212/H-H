class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :cars
  has_many :cars_created, :class_name => 'Car', :foreign_key => 'acq_agent_id'
  has_many :cars_managed, :class_name => 'Car', :foreign_key => 'acc_exc_id'
  has_and_belongs_to_many :permissions
  has_one :payment
end
