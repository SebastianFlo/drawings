const storeConfig = {
    state: {
        currentImageIndex: 0,
        images: [
            'image1',
            'image2'
        ],
        sectors: {},
        attention: {}
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
        addSectorComponent(state, componentData) {
            state.sectors[componentData.id] = componentData.dimensions;
        },
        drawSectors (state, activeSector) {
            let sectorHolder = document.querySelector('#sector-holder');

            if (sectorHolder) {
                sectorHolder.innerHTML = '';
            } else {
                sectorHolder = document.createElement('div');
                sectorHolder.id = 'sector-holder';
                sectorHolder.style.position = 'absolute';
                sectorHolder.style.top = 0;
                sectorHolder.style.left = 0;
            }

            Object.keys(state.sectors).forEach(sectorId => {
                const sectorEl = document.createElement('div');
                const sectorColor = sectorId === activeSector ? 'papayawhip' : '#c3c3c3';
                const sectorDim = state.sectors[sectorId];
                Object.assign(sectorEl.style, {
                    position: 'relative',
                    width: `${sectorDim.width}px`,
                    height: `${sectorDim.height}px`,
                    left: `${sectorDim.x1}px`,
                    top: `${sectorDim.y1}px`,
                    color: sectorColor,
                    border: `1px solid ${sectorColor}`,
                    opacity: '0.8',
                    'text-align': 'center',
                    'line-height': `${sectorDim.height}px`
                });

                sectorEl.innerHTML = `
                    <span>${sectorId}</span>
                `;
                sectorHolder.appendChild(sectorEl);
            });
            document.documentElement.appendChild(sectorHolder);
        },
        setAttention(state, sectorId) {
            state.attention[sectorId] = state.attention[sectorId] + 1 || 1;
        }
    },
    getters: {
        firstImageIndex: state => (state.images.length >= 0 ? 0 : undefined),
        lastImageIndex: (state, getters) => getters.imageCount - 1,
        imageCount: state => state.images.length
    }
};

export default storeConfig;
