const apiData = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const alData = await response.json();
    const arrayOfData = alData.posts;
    const postContainer = document.getElementById('PostContainer')

    arrayOfData.forEach(post => {

        const createDiv = document.createElement('div');
        createDiv.innerHTML = `
        <div class="bg-slate-200 hover:bg-blue-100 rounded-xl shadow-xl p-5 flex justify-between border-2 border-blue-300 ">
        <div>

            <div>
                <img class="w-[65px] rounded-xl" src="${post.image}" alt="">
            </div>

        </div>
        <div class="flex-grow  ">
            <div class="p-2 border-b-2 border-dashed space-y-2">
                <div class="font-semibold flex items-center gap-3">
                    <p># ${post.category}</p>
                    <p>Author: ${post.author.name}</p>
                </div>
                <div>
                    <h1 class="text-xl font-semibold">${post.title}</h1>
                </div>
                <div>
                    <p>${post.description}</p>
                </div>

            </div>
            <div class="p-2 flex  justify-between ">
                <div class="flex items-center justify-between w-1/2 ">
                    <div class="flex gap-2 items-center">
                        <img src="./Icon/chat.png" alt="">
                        <p>${post.comment_count}</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <img src="./Icon/eye.png" alt="">
                        <p>${post.view_count}</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <img src="./Icon/back-in-time.png" alt="">
                        <p>${post.posted_time}</p>
                    </div>
                </div>
                <div onclick='btnFunction()' class="rounded-full bg-green-600 px-3 py-2">
                    <button  class="bookMark text-white"> <img src="./Icon/mark.png" alt="">
                    </button>
                </div>

            </div>
        </div>

    </div>
        `

        postContainer.appendChild(createDiv)

    });



}

let count = 0
const btnFunction = () => {

    const counter = document.getElementById('count').innerHTML;
    const digit = parseInt(count)
    count = count + 1
    const setValue = document.getElementById('count');
    setValue.innerText = count;
    

}


const loadCategory = async (category) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`);
    const allData = await response.json();
    const posts = allData.posts;
    const categoryContainer = document.getElementById('PostContainer');
    categoryContainer.innerHTML = '';
    posts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `
        
        <div class="bg-slate-200 hover:bg-blue-100 rounded-xl shadow-xl p-5 flex justify-between border-2 border-blue-300 ">
        <div>

            <div>
                <img class="w-[65px] rounded-xl" src="${post.image}" alt="">
            </div>

        </div>
        <div class="flex-grow  ">
            <div class="p-2 border-b-2 border-dashed space-y-2">
                <div class="font-semibold flex items-center gap-3">
                    <p># ${post.category}</p>
                    <p>Author: ${post.author.name}</p>
                </div>
                <div>
                    <h1 class="text-xl font-semibold">${post.title}</h1>
                </div>
                <div>
                    <p>${post.description}</p>
                </div>

            </div>
            <div class="p-2 flex  justify-between ">
                <div class="flex items-center justify-between w-1/2 ">
                    <div class="flex gap-2 items-center">
                        <img src="./Icon/chat.png" alt="">
                        <p>${post.comment_count}</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <img src="./Icon/eye.png" alt="">
                        <p>${post.view_count}</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <img src="./Icon/back-in-time.png" alt="">
                        <p>${post.posted_time}</p>
                    </div>
                </div>
                <div class="rounded-full bg-green-600 px-3 py-2">
                    <button onclick='btnFunction()' class="bookMark text-white"> <img src="./Icon/mark.png" alt="">
                    </button>
                </div>

            </div>
        </div>

    </div>
        
        `

        categoryContainer.appendChild(div)

    })
}


const latestApi = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const latestPosts = await response.json();
    const latestPostContainer = document.getElementById('latestPostContainer');
    latestPosts.forEach(latest => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card  bg-gray-200 shadow-xl">
        <figure class="px-10 pt-10">
            <img src=${latest.cover_image} alt="Shoes"
                class="rounded-xl" />
        </figure>
        <div class="card-body  ">
            <div class="flex items-center gap-3">
                <img src="./Icon/calendar.png" alt="">
                <p>${latest.author.posted_date ? latest.author.posted_date : 'No publish date'}</p>
            </div>
            <h2 class=" text-xl text-start font-semibold">${latest.title}</h2>
            <p>${latest.description.slice(0, 100)}</p>
            <div class="flex items-center gap-3">
                <div>
                <img src=${latest.profile_image} alt="Shoes"
                class="rounded-full w-[50px]" />
                </div>
                <div>
                    <p class='text-xl font-semibold'>${latest.author.name}</p>
                    <p>${latest.author.designation ? latest.author.designation : 'Unknown'}</p>
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
