source 'https://rubygems.org'



# A simple Ruby Gem to bootstrap dependencies for setting up and
# maintaining a local Jekyll environment in sync with GitHub Pages
# https://github.com/github/pages-gem
gem 'github-pages'

group :jekyll_plugins do
  gem 'jekyll-feed'
  gem 'jekyll-sitemap'
  gem 'jekyll-paginate'
end

gem 'webrick'

# Windows and JRuby does not include sane zones
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem 'wdm', '~> 0.1.1', :install_if => Gem.win_platform?

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem 'http_parser.rb', '~> 0.6.0', :platforms => [:jruby]
