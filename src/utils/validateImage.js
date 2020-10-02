export function validateImage (file) {
    if (!file) {
        return false
    }
    if(!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
        return false
    }
    const reader = new FileReader();
    return new Promise(((resolve, reject) => {
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                console.log('valid image')
                resolve({validImage: true, imageDataUrl: img.src});
            }
            img.onerror = () => {
                reject("invalid image");
            }
            img.src = String(e.target.result);
        }
        reader.readAsDataURL(file);
    }))
}