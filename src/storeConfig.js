const storeConfig = {
    state: {
        currentImageIndex: 0,
        images: [
            'image1',
            'image2'
        ],
        sectors: {},
        sectorComponents: {}
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
        },
        // setComponentSectors (state, components) {
        //     const componentIndex = 1;
        //     Object.values(components).forEach(component => {
        //         Object.assign(state.sectors, {
        //             [`component-${componentIndex}`]: {
        //                 x1: component.x1,
        //                 x2: component.x1 + component.width,
        //                 y1: component.x2,
        //                 y2: component.x2 + component.height
        //             }
        //         });
        //     });
        // },
        addSectorComponent(state, componentData) {
            state.sectors[componentData.id] = componentData.dimensions;
        },
        drawSectors () {}
    },
    getters: {
        firstImageIndex: state => (state.images.length >= 0 ? 0 : undefined),
        lastImageIndex: (state, getters) => getters.imageCount,
        imageCount: state => state.images.length
    }
};

export default storeConfig;
