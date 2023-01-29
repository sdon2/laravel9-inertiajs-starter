const asset = (url) => {
    if (url) {
        if (url.startsWith('/')) {
            url = url.slice(1);
        }
        return window.public_path + url;
    }
};

export { asset };
