# -*- encoding: utf-8 -*-
# stub: colorize 0.8.1 ruby lib

Gem::Specification.new do |s|
  s.name = "colorize"
  s.version = "0.8.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Micha\u{142} Kalbarczyk"]
  s.date = "2016-06-29"
  s.description = "Extends String class or add a ColorizedString with methods to set text color, background color and text effects."
  s.email = "fazibear@gmail.com"
  s.homepage = "http://github.com/fazibear/colorize"
  s.licenses = ["GPL-2.0"]
  s.rubygems_version = "2.5.2.1"
  s.summary = "Ruby gem for colorizing text using ANSI escape sequences."

  s.installed_by_version = "2.5.2.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rake>, ["~> 10.0"])
      s.add_development_dependency(%q<minitest>, ["~> 5.0"])
      s.add_development_dependency(%q<codeclimate-test-reporter>, ["~> 0.4"])
    else
      s.add_dependency(%q<rake>, ["~> 10.0"])
      s.add_dependency(%q<minitest>, ["~> 5.0"])
      s.add_dependency(%q<codeclimate-test-reporter>, ["~> 0.4"])
    end
  else
    s.add_dependency(%q<rake>, ["~> 10.0"])
    s.add_dependency(%q<minitest>, ["~> 5.0"])
    s.add_dependency(%q<codeclimate-test-reporter>, ["~> 0.4"])
  end
end
