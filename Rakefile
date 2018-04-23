require 'html-proofer'
require 'redcarpet'
require "net/http"

task :checklinks do
  sh "bundle exec jekyll build"
  options = {
    :log_level => :info,
    :empty_alt_ignore => true,
    :url_ignore => [
      # Skip fragment identifiers, as these are not real links
      '#',
      # Skip links that have been auto-inserted for the 'Edit Source' action (i.e. that match this regexp)
      /github.com\/metadot\/q-website/
    ],
    :only_4xx => true,
    # Replace canonical link with local links.
    # Details: http://tongueroo.com/articles/getting-html-proofer-to-work-with-canonical-url-for-google-seo/
    :url_swap => {
      'https://metadot.github.io/q-website/' => '/q-website/',
      '/q-website' => '',
      'https://github.com/metadot' => 'https://github.com/metadot/q-website/'
    }
  }
  HTMLProofer.check_directory("./_site", options).run
end


task default: %i(spec proof_readme)
