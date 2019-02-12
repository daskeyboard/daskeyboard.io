require 'html-proofer'
require 'redcarpet'
require "net/http"

task :checklinks do
  sh "echo 'not rebuild site since it supposed to be built already' #bundle exec jekyll build"
  options = {
    :log_level => :info,
    :empty_alt_ignore => true,
    :url_ignore => [
      # Skip fragment identifiers, as these are not real links
      '#',
      # Skip links that have been auto-inserted for the 'Edit Source' action (i.e. that match this regexp)
      # /github.com\/DasKeyboard/
    ],
    :only_4xx => true,
    # Replace canonical links with local links.
    # Details: http://tongueroo.com/articles/getting-html-proofer-to-work-with-canonical-url-for-google-seo/
    :url_swap => {
      # 'https://github.com/DasKeyboard/Daskeyboard.io/' => '/Daskeyboard.io/',
      # '/Daskeyboard.io' => '',
      # 'https://github.com/metadot/DasKeyboard/' => 'https://github.com/DasKeyboard/Daskeyboard.io/'
    }
  }
  HTMLProofer.check_directory("./_site",{
    :http_status_ignore => [
      "0",
    ]
    :allow_hash_href => true,
    }).run
end


task default: %i(spec proof_readme)


# task :proof_readme do

#   renderer = Redcarpet::Render::HTML.new \
#     with_toc_data: true
#   redcarpet = Redcarpet::Markdown.new(renderer)
#   html = redcarpet.render File.read('README.md')

#   mkdir_p 'out'
#   File.write('out/README.html', html)

#   opts = { url_ignore: [/badge.fury.io/] }
#   HTMLProofer.check_directory('./out', opts).run
# end
