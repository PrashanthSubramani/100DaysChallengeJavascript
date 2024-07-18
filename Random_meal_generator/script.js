async function getMeal(){
    let math = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    const response = await fetch("./List/List.json");
    const data = await response.json();
    const filterData = data.foodDetails.filter((item) => parseInt(math) === item.id);

    const content = filterData.map((value, index) => {
        var page_content = 
        `
        <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <div class="card-body">
    
            <div class="row">
                <div class="col-md-6 d-flex justify-content-end">
                    <img src="${value.image}" width="600" height="600">
                </div>
                <div class="col-md-6">
                    <h2>${value.name}</h2>
                    <p class="fs-4">${value.description}</p>
                </div>
                <div class="col-md-6 mt-4 d-flex flex-column text-end">
                    <p><b>Category</b> : ${value.category}</p> 
                    <p><b>Area</b> : ${value.area}</p> 
                    <p><b>Tags</b> : ${value.tags}</p> 
                </div>
                <div class="col-md-6">
                    <div>
                        <h2>Ingredients</h2>
                        <ul class="fs-4">
                `;

            const ingredients = value.ingredients.split(",");

            ingredients.forEach((item, index) => {
                page_content +=            
                ` 
                    <li>${item}</li>
                `;
            });

            page_content +=    
            `
                        </ul>
                    </div>
                </div>
                <div class="col-md-12 d-flex justify-content-center">
                    <iframe width="958" height="562" src="${value.youtubeLink}" title="${value.name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
                </div>
            </div>
        `;

        return page_content;
    });

    const main_page_content = document.querySelector('.page-content');
    main_page_content.innerHTML = content[0];
}
