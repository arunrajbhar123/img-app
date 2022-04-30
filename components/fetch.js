let fetchReq = async(API, query) => {
    try {
        // https://api.unsplash.com//search/photos?page=1&query=office&client_id=CrvtbUbzHzBd29vfQnk4aO0sG--8Wv2XrA2cy82iPlY
        const res = await fetch(`https://api.unsplash.com//search/photos?per_page=40&query=${query}&client_id=${API}`);
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e)
    }
}

let append = (data, container) => {
    console.log(data)
    data.forEach(({ urls: { regular } }) => {
        let box = document.createElement('div');
        let img = document.createElement('img');
        img.src = regular;
        box.append(img);
        container.append(box)
    })
}
export { fetchReq, append };