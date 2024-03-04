const apiData = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const alData = await response.json();
    const arrayOfData = alData.posts;
    arrayOfData.forEach(post => {

        // console.log(post);
    });
}

const latestApi = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const latestPosts = await response.json();
    const latestPostContainer = document.getElementById('latestPostContainer');
    latestPosts.forEach(latest => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card  bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <img src=${latest.cover_image} alt="Shoes"
                class="rounded-xl" />
        </figure>
        <div class="card-body  ">
            <div class="flex items-center gap-3">
                <img src="./Icon/calendar.png" alt="">
                <p>published Date</p>
            </div>
            <h2 class=" text-xl text-start font-semibold">${latest.title}</h2>
            <p>${latest.description.slice(0,100)}</p>
            <div class="flex items-center gap-3">
                <div>
                <img src=${latest.profile_image} alt="Shoes"
                class="rounded-full w-[50px]" />
                </div>
                <div>
                    <p>name</p>
                    <p>job title</p>
                </div>
            </div>
        </div>
    </div>
`
        latestPostContainer.appendChild(div)
    })


}

apiData();
latestApi();
