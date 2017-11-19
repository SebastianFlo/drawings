import { vueAuth } from './main';

const storeConfig = {
	state: {
		currentImageIndex: 0,
		images: ['image1', 'image2'],
		sectors: {},
		attention: {},
		rotate: false,
		bounce: false,
		currentPage: 1,
		cart: {},
		isAuthenticated: false
	},
	mutations: {
		setImages(state, imageData) {
			state.images = imageData;
		},
		previousImage(state, imageCount) {
			if (state.currentImageIndex === 0) {
				state.currentImageIndex = imageCount - 1;
				return;
			}
			state.currentImageIndex--;
		},
		nextImage(state, imageCount) {
			if (state.currentImageIndex === imageCount - 1) {
				state.currentImageIndex = 0;
				return;
			}
			state.currentImageIndex++;
		},
		prevPage(state) {
			if (state.currentPage === 0) {
				return;
			}
			state.currentPage--;
		},
		nextPage(state) {
			state.currentPage++;
		},
		goToImage(state, index) {
			state.currentImageIndex = index;
		},
		addSectorComponent(state, componentData) {
			state.sectors[componentData.id] = componentData.dimensions;
		},
		drawSectors(state, activeSector) {
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
				const sectorColor =
					sectorId === activeSector ? 'papayawhip' : '#c3c3c3';
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
		},
		resetAttention(state, sectorId) {
			state.attention[sectorId] = 0;
		},
		setRotate(state, rotate) {
			state.rotate = rotate;
		},
		setBouce(state, bounce) {
			state.bounce = bounce;
		},
		isAuthenticated(state, payload) {
			state.isAuthenticated = payload.isAuthenticated;
		}
	},
	getters: {
		firstImageIndex: state => (state.images.length >= 0 ? 0 : undefined),
		lastImageIndex: (state, getters) => getters.imageCount - 1,
		imageCount: state => state.images.length,
		isAuthenticated: vueAuth ? vueAuth.isAuthenticated() : () => false
	},
	actions: {
		login(context, payload) {
			vueAuth
				.login(payload.user, payload.requestOptions)
				.then(response => {
					context.commit('isAuthenticated', {
						isAuthenticated: vueAuth.isAuthenticated()
					});
				});
		}
	}
};

export default storeConfig;
