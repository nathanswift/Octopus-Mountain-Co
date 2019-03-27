Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    get 'works/index'
    get 'works/show'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
