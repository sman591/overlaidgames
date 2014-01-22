class Api::V1::OverlaysController < ApplicationController
  respond_to :json

  def index
    respond_with Overlay.all
  end

  def show
    respond_with Overlay.find(params[:id])
  end
end