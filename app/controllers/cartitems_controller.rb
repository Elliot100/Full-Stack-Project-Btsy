# This class doesn't make a whole lot of sense unless there's a logged
# in user. We're going to go ahead and skip the views for this for now.

class CartitemsController < ApplicationController
  def create
    @cartitem = Cartitem.new
    @cartitem.user_id = current_user.id
    @cartitem.product_id = params[:id]
    unless @cartitem.save
      flash[:errors] = @cartitem.errors.full_messages
    end
    redirect_to product_url(params[:id])
  end

  def destroy
    @cartitem = Cartitem.find(params[:id])
    @cartitem.destroy
    redirect_to product_url(@cartitem.product_id)
  end
end
