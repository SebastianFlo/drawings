<template>
    <div>
        <h3>{{ message }}</h3>
    </div>
</template>

<script>
    export default {
        name: 'thea-attention',
        data() {
            return {
                message: 'This component measures attention',
                mousePos: {},
                checkMouseDuration: 1000,
                screen: {
                    width: 0,
                    height: 0,
                    scrollHeight: 0
                },
                myDoc: document.documentElement,
                sectors: {}
            };
        },
        props: {
            // Has to be 2^x: 2, 4, 16 ...
            sectorCount: {
                default: 4,
                type: Number
            },
            showSectors: {
                default: false,
                type: Boolean
            },
        },
        methods: {
            handleMouseMove: function ({ pageX, pageY }) {
                this.mousePos = {
                    x: pageX,
                    y: pageY
                };
            },
            getPosition: function () {
                if (!this.mousePos.x || !this.mousePos.y) {
                    return;
                }
                // Store in a table, or do some magic
                this.screen.scrollHeight = this.myDoc.scrollTop;
                console.log(`
                    x: ${this.mousePos.x}
                    y: ${this.mousePos.y}
                    scroll: ${this.screen.scrollHeight}
                `);

                const activeSector = this.fitMouseInSector(this.mousePos, this.sectors);
                console.log(activeSector);
            },
            setScreenSize: function () {
                this.screen.width = Math.max(this.myDoc.clientWidth, window.innerWidth || 0);
                this.screen.height = Math.max(this.myDoc.clientHeight, window.innerHeight || 0);
                this.setSectors({
                    sectorCount: this.sectorCount,
                    screenHeight: this.screen.height,
                    screenWidth: this.screen.width
                });
            },
            setSectors ({ sectorCount, screenHeight, screenWidth }) {
                const cols = this.getColumns(sectorCount);
                // we assume it's squared sectors
                const rows = cols;
                const sectorWidth = screenWidth / cols;
                const sectorHeight = screenHeight / rows;

                for (let rowIndex = 1; rowIndex <= rows; rowIndex++) {
                    for (let colIndex = 1; colIndex <= cols; colIndex++) {
                        Object.assign(this.sectors, {
                            [`sector-${rowIndex}-${colIndex}`]: {
                                x1: sectorWidth * (colIndex - 1),
                                x2: sectorWidth * colIndex,
                                y1: sectorHeight * (rowIndex - 1),
                                y2: sectorHeight * rowIndex
                            }
                        });
                    }
                }

                if (this.showSectors) {
                    this.drawSectors(this.sectors, sectorWidth, sectorHeight);
                }
            },
            getColumns: function (sectorCount) {
                let counter = sectorCount;
                let columns = 0;
                while (counter % 2 < 1) {
                    counter /= 2;
                    columns++;
                }
                return columns;
            },
            fitMouseInSector (mousePos, sectors) {
                return Object.keys(sectors)
                    .filter(sector => (sectors[sector].x1 < mousePos.x &&
                                        mousePos.x < sectors[sector].x2))
                    .filter(sector => (sectors[sector].y1 < mousePos.y &&
                                        mousePos.y < sectors[sector].y2));
            },
            drawSectors (sectors, sectorWidth, sectorHeight) {
                Object.keys(sectors).forEach(sector => {
                    const sectorEl = document.createElement('div');
                    sectorEl.id = sector;

                    Object.assign(sectorEl.style, {
                        position: 'absolute',
                        width: `${sectorWidth}px`,
                        height: `${sectorHeight}px`,
                        left: `${sectors[sector].x1}px`,
                        top: `${sectors[sector].y1}px`,
                        color: 'papayawhip',
                        border: '1px solid papayawhip',
                        opacity: '0.8',
                        'text-align': 'center',
                        'line-height': `${sectorHeight}px`
                    });

                    sectorEl.innerHTML = `
                        <span>${sector}</span>
                    `;
                    this.myDoc.appendChild(sectorEl);
                });
            }
        },
        mounted: function () {
            this.setScreenSize();
            document.onmousemove = this.handleMouseMove;
            setInterval(this.getPosition, this.checkMouseDuration);
        }
    };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>

</style>