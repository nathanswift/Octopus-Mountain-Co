Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :works
    resources :users, only: :update
    resources :contacts
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*other', to: 'static#index'
end
