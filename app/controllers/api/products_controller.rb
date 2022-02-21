class Api::ProductsController < ApplicationController
  def create
    @product = Product.new(product_params)
    if @product.save
      puts "#/products/#{@product.id}"
      render :show
    else
      render @product.errors.full_messages, status: 401
    end
  end
  
  def update
    @product = selected_product
    if @product && @product.update_attributes(product_params)
      render :show
    elsif !@product
      render json: ['Could not locate product'], status: 400
    else
      render json: @product.errors.full_messages, status: 401
    end
  end
  
  def show
    @product = selected_product
    if @product
      render :show
    else
      render json: @product.errors.full_messages, status: 404
    end
  end
  
  def index
    @products = Product.all
  end
  
  def destroy
    @product = selected_product
    if @product
      @product.destroy
      render :show
    else
      render ['Could not find product']
    end
  end

  def search
    # User.where("lower(username) LIKE ?", "%" + "broo".downcase + "%")
    @products = Product.where("lower(title) LIKE ?", "%" + "#{params[search]}".downcase + "%")

    # @users = User.where("username LIKE '%#{params[:query]}%'")
    render json: @products
  end
  
  private
  
  def selected_product
    Product.find(params[:id])
  end
  
  def product_params
    params.require(:product).permit(:title, :image, :price, :description)
  end
end
