---
layout: page
title: Login
permalink: /login/
---

<link rel="stylesheet" href="{{ "css/login.css"  | relative_url }}">

Login to your Q Account to include your API key in the scripts
<form name="loginForm"
      onsubmit="return validateForm();"
      method="post">
  <div class="form-group">
    <label for="emailInput">Email address</label>
    <input type="email" 
           class="form-control" id="emailInput"
           name="email"
           aria-describedby="emailHelp" placeholder="Enter email" autofocus>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="passwordInput">Password</label>
    <input type="password" 
           class="form-control" 
           id="passwordInput"
           name="password" 
           placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-success">Submit</button>
</form>

<script src="{{ "js/login.js" | relative_url }}"></script>




