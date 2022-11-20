const baseUrl: string = 'http://jsonplaceholder.typicode.com/photos?_start=0&_limit=3'

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

async function enhancedFetch<ResponseData = string[]>(url: string) {
    const res = await fetch(url);
    const data: ResponseData = await res.json();

    return {
        data,
        status: res.status
    };
}

enhancedFetch<Photo[]>(baseUrl)
    .then(res => {
        res.data.map(item => console.log(item.albumId))
    });
