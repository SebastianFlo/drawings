const storeConfig = {
    state: {
        currentImageIndex: 0,
        images: [
            'image1',
            'image2'
        ]
    },
    mutations: {
        setImages (state, imageData) {
            state.images = imageData;
        },
        previousImage (state, imageCount) {
            if (state.currentImageIndex === 0) {
                state.currentImageIndex = imageCount - 1;
                return;
            }
            state.currentImageIndex--;
        },
        nextImage (state, imageCount) {
            if (state.currentImageIndex === imageCount - 1) {
                state.currentImageIndex = 0;
                return;
            }
            state.currentImageIndex++;
        },
        goToImage (state, index) {
            state.currentImageIndex = index;
        }
    },
    getters: {
        firstImageIndex: state => (state.images.length >= 0 ? 0 : undefined),
        lastImageIndex: (state, getters) => getters.imageCount,
        imageCount: state => state.images.length
    }
};

export default storeConfig;
