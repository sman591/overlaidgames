class Api::V1::BackgroundsController < ApplicationController
  respond_to :json

  def index
    respond_with Background.all
  end

  def show
    respond_with Background.find(params[:id])
  end
end