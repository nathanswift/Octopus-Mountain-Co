class Api::WorksController < ApplicationController
  before_action :set_work, only: [:show, :update, :destroy]

  def index
    render json: Work.all
  end

  def show
    render json: @work
  end

  def create
    work = Work.new(work_params)

    if work.save
      render json: work
    else
      render json: work.errors, status: 422
    end
  end

  def update
    if @work.update(work_params)
      render json: @work
    else
      render json: @work.errors, status: 422
    end
  end

  def destroy
    @work.destroy
  end

  private 
    def set_work
      @work = Works.find(params[:id])
    end

    def work_params
      params.require(:work).permit(:name, :image_url, :web_url)
    end
end
