export default function AdminUser(user){
    console.log('Admin Page');
    return `
    <div class="container-contact">
    <h1>User Profile<h1>
    <h2>${user}</h2>
    <div class="user-info"></div>
    <btn class="returnAdminHome btn btn-primary">Return to User List</btn>
    </div>
    `;
}