Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users do
      resources :products, only: [:index]
      resources :cartitems, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    post '/search', to: 'products#search'

    resources :products
    resources :cartitems, only: [:index,:create,:update]
    delete '/cartitems', to: 'cartitems#destroy'

  end
  root to: 'root#root'
end
