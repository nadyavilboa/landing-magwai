import axios from 'axios';

const MAX_POSTS = 20;
const AMOUNT_IN_PART = 5;
let startIndex = 0;
let toDownload = 0;
let amountDownloaded = 0;

const loadData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const downloadPartPosts = (array) => {
    
    if (array.length < 5) return array;

    const result = [];

    if (amountDownloaded < MAX_POSTS - AMOUNT_IN_PART) {
        toDownload = AMOUNT_IN_PART;
    } else {
        toDownload = MAX_POSTS - amountDownloaded;
    }

    for (let i = startIndex; i < startIndex + toDownload; i++) {
        result.push(array[i]);
    }

    amountDownloaded += toDownload;
    startIndex += toDownload;

    return result;
}

export { loadData, downloadPartPosts }