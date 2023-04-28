const getCroppedImageUrl = (url:string)=>{
    console.log(url);
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
 return url.slice(0,index) + 'corp/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;