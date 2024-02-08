# config/initializers/cors.rb

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*' # Update this to the specific origin of your React app in production
    resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options]
  end
end
