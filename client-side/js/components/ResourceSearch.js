export default function ResourceSearch(resources) {
    console.log(resources);
    return `
    <div class="api-page-container">   
    ${resources.Result.Resources.Resource.map(resource => {
    return `
    <div class="search-list-item">
        <h3></h3>
        <a href="${resource.AccessibleVersion}">${resource.Title}</a>
        <br>
        <img class="resourceImg" src="${resource.ImageUrl}">     
        <p>Overview: ${resource.Sections.section[0].Content}</p>
        <br>
        <input type='hidden' id="resource-id" value="${resource.Id}"/>
    </div>
        `;
    }).join('')}
    `;
}


