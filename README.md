#Rest API

It is a rest API build with node.js and mongoose

<h3> Features  </h3>
<ul>
  <li>User can register to the system</li>
  <li>User can login to the system</li>
  <li>Only logged in user can upload some post </li>
  <li>All authorized user can view any posts uploaded<li>
  <li>Author of post can only edit the post</li>
  <li>Post can be deleted by author or the admin</li>
  <li>Admin can add and remove user</li>
  <li>User can only edit his/her information</li>
</ul>

<h1> Steps for installation</h1>

<h3>Must have node and mongodb installed</h3>
<h3>Run following codes on terminal<h3>
<ol>
  <li>run <code>git clone https://github.com/Irajan/restAPI.git<code></li>
  <li>run <code>cd restAPI</code></li>
  <li>run <code>yarn</code> or <code>npm install</code></li>
  <li>run <code>cp .env.example .env</code></li>
  <li>Modify .env file as per your database configuration</li>
  <li>run <code>yarn dev</code> or <code>npm run dev</code></li>
</ol>

<h3>Your rest api is now live on given PORT (as in your .env)</h3>
