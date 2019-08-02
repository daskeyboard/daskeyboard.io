# -*- encoding: utf-8 -*-
# stub: jekyll-relative-links 0.6.0 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-relative-links"
  s.version = "0.6.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Ben Balter"]
  s.date = "2019-02-11"
  s.email = ["ben.balter@github.com"]
  s.homepage = "https://github.com/benbalter/jekyll-relative-links"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.5.2.1"
  s.summary = "A Jekyll plugin to convert relative links to markdown files to their rendered equivalents."

  s.installed_by_version = "2.5.2.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<jekyll>, ["~> 3.3"])
      s.add_development_dependency(%q<rspec>, ["~> 3.5"])
      s.add_development_dependency(%q<rubocop>, ["< 1.0.0", ">= 0.49.0"])
      s.add_development_dependency(%q<rubocop-jekyll>, ["~> 0.7.0"])
    else
      s.add_dependency(%q<jekyll>, ["~> 3.3"])
      s.add_dependency(%q<rspec>, ["~> 3.5"])
      s.add_dependency(%q<rubocop>, ["< 1.0.0", ">= 0.49.0"])
      s.add_dependency(%q<rubocop-jekyll>, ["~> 0.7.0"])
    end
  else
    s.add_dependency(%q<jekyll>, ["~> 3.3"])
    s.add_dependency(%q<rspec>, ["~> 3.5"])
    s.add_dependency(%q<rubocop>, ["< 1.0.0", ">= 0.49.0"])
    s.add_dependency(%q<rubocop-jekyll>, ["~> 0.7.0"])
  end
end
