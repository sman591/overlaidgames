source "https://rubygems.org"

def ruby_version(file = ".ruby-version")
  file = File.join(File.dirname(__FILE__), file)
  IO.read(file).chomp.sub(/-p.*$/, "")
end

ruby ruby_version

gem "rails", "4.0.0"

gem "ember-rails"
gem "foreman"
gem "jquery-rails"
gem "pg"
gem "sass-rails", "~> 4.0.0"
gem "uglifier", ">= 1.3.0"

gem 'bootstrap-sass', '~> 3.0.3.0'