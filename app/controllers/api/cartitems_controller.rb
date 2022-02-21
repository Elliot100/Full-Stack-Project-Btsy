class Api::CartitemsController < ApplicationController
  def index
    # array of cartitem
    @cartitems = Cartitem.order(:id).where(user_id: current_user.id)
    @cartitems = @cartitems.map { |cartitem| 
      { id: cartitem.id,
        qty: cartitem.qty,
        product: cartitem.product }
    }
  end

  def create
    if (@cartitem = Cartitem.find_by(user_id: current_user.id, product_id: params[:id])) 
      @cartitem.qty += 1;
      @cartitem.save
      @product = @cartitem.product
      render 'api/products/show'
    else

      @cartitem = Cartitem.new
      @cartitem.user_id = current_user.id
      @cartitem.product_id = params[:id]
      @cartitem.qty = params[:qty]

      if @cartitem.save
        @product = @cartitem.product
        render 'api/products/show'
      else
        render json: @cartitem.errors.full_messages, status: 401
      end
    end
  end

  def update
    @cartitem = Cartitem.find(params[:id])
    @cartitem.qty = params[:qty]

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
