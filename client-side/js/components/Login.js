export default function Login(){
    return `
<div class="login-page">
<div class="form">
    <div class="login-form">
      <input class="loginName" type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button id="login-btn">login</button>
      <p class="message">Not registered? <a href="">Create an account</a></p>
  </div>
</div>
</div>
`;
}