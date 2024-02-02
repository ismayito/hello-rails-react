class Api::V1::GreetingsController < ApplicationController
  def index
    @message = Greeting.order('RANDOM()').first
    if @message.present?
      render json: { success: true, message: { message: @message.message } }
    else
      render json: { success: false, message: { message: 'No message found' } }
    end
  end
end
