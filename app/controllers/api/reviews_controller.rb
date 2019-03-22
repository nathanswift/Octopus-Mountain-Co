class Api::ReviewsController < ApplicationController
  before_action :set_work
  before_action :set_review, only: [:show, :update, :destroy]

  def index
    render json: @work.reviews
  end

  def show
    render json: @review
  end

  def create
    review = @work.reviews.new(review_params)

    if review.save
      render json: review
    else
      render json: review.errors, status: 422
    end
  end

  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: 422
    end
  end

  def destroy
    @review.destroy
  end

  private
    def set_work
      @work = Work.find(params[:work_id])
    end

    def set_review
      @review = Review.find(params[:id])
    end

    def review_params
      params.require(:review).permit(:author, :body, :star_count, :site_name, :icon, :site_url)
    end
end
