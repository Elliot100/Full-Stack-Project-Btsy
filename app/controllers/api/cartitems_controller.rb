class Api::CartitemsController < ApplicationController
  def index
    # array of cartitem
    @cartitems = Cartitem.where(user_id: current_user.id)
    @cartitems = @cartitems.map{ |cartitem| 
      cartitem.product
    }
  end

  def create
    @cartitem = Cartitem.new
    @cartitem.user_id = current_user.id
    @cartitem.product_id = params[:id]
    if @cartitem.save
      @product = @cartitem.product
      render 'api/products/show'
    else
      render json: @cartitem.errors.full_messages, status: 401
    end
  end

  def destroy
    @cartitem = Cartitem.find_by(user_id: current_user.id, product_id: params[:id])
    @cartitem.destroy
    @product = @cartitem.product
    render 'api/products/show'
  end
end
