<template>
    <v-row v-resize="onResize">
        <app-bar :marketing="true"></app-bar>

        <!-- content -->
        <v-col class="mainLayout contentPart" cols="12">
            <v-row class="ma-0 pa-0" style="margin-top: 5% !important">
                <v-col class="d-flex flex-column align-center" cols="12">
                    <div class="privacy-content text-center">
                        <h1 class="mb-6">Privacy Statement:</h1>
                        <p class="privacy-text">
                            This message, including any attachments, may contain confidential information intended only
                            for
                            the person(s) named above. Any attached file(s) are intended for reference purposes only.
                            They
                            are in no way to be taken as appurtenant to, associated with or in placement of hard copies
                            of
                            any file issued by our office. G-Tower Inc. is not responsible for edited or reproduced
                            versions
                            of this digital data. If you have received this communication in error, please erase all
                            copies
                            of the message and its attachments and notify us immediately.
                        </p>
                    </div>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "PrivacyPage",
    props: {
        page_id: {
            type: String,
            required: false, // Optional if other pages share this route
        },
    },
};
</script>

<style scoped>
.privacy-content {
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.privacy-text {
    text-align: justify;
    line-height: 1.6;
    margin: 0 auto;
}

h1 {
    color: #333;
    margin-bottom: 20px;
}
</style>

<script>
import AppBar from './AppBar.vue'
export default {
    components: { AppBar },
    data() {
        return {
            colSize: '',
            presentations: [
                {
                    image: 'G-Tower_Inspection_Flyer-300x169.png',
                    text: 'Inspection Services Flyer',
                    link: 'https://g-tower.com/wp-content/uploads/2022/09/G-Tower_Inspection_Flyer.pdf',
                },
                {
                    image: 'Why_Work_G-Tower-300x169.png',
                    text: 'Why work with G-Tower',
                    link: 'https://g-tower.com/wp-content/uploads/2022/09/Why_Work_G-Tower.pdf',
                },
                {
                    image: 'G-Tower_Engineering_Services-300x169.png',
                    text: 'Engineering Services Flyer',
                    link: 'https://g-tower.com/wp-content/uploads/2022/09/G-Tower-Engineering-Services-Flyer.jpg',
                },
                {
                    image: 'G-Tower_Inspection_Services-300x169.png',
                    text: 'Inspection Services Presentation',
                    link: 'https://g-tower.com/wp-content/uploads/2022/09/Why_Work_G-Tower.pdf',
                },
                {
                    image: 'G-Tower_Engineering_Services-300x169.png',
                    text: 'Engineering Services Presentation',
                    link: 'https://g-tower.com/wp-content/uploads/2022/09/G-Tower_Engineering_Services.pdf',
                },
            ],
            currentWidth: '',
        }
    },
    methods: {
        pushPage(page) {
            this.$router.push({ path: page })
        },
        onResize() {
            this.currentWidth = window.innerWidth
            if (window.innerWidth < 600) {
                this.colSize = '12'
            } else if (window.innerWidth > 600 && window.innerWidth < 900) {
                this.colSize = '5'
            } else if (window.innerWidth > 900 && window.innerWidth < 1200) {
                this.colSize = '6'
            } else {
                this.colSize = '6'
            }
        },
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700;800&display=swap');

.mainLayout {
    font-family: 'Jost', sans-serif !important;

    max-width: 100vw;
    margin: 0;
    padding: 0;
}

.sideBarLayout {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}

.sideBarCardLayout {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    border-right: 1px solid black;
}

.sideBar {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin: 20%;
    margin-top: 40%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.sideBar:hover {
    cursor: pointer;
}

.contentPart {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 0;
    padding: 0;
    margin-top: 2rem;
}

.projectStyle {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 4% !important;
}

.mainTitle {
    font-style: normal;
    font-size: 2.5em;
    font-weight: 800;
    color: #8fcc6e;

    line-height: 110%;

    justify-content: center;
    align-content: center;
    text-align: center;
    word-break: break-word;
}

.titleStyle {
    font-style: normal;
    font-size: 1.8em;
    font-weight: 500;
    color: #759ecc;

    line-height: 100%;

    margin-bottom: 4%;

    justify-content: center;
    align-content: center;
    text-align: center;
    word-break: break-word;
}

.redirectButton {
    font-style: normal;
    font-weight: 500;

    display: flex;
    justify-content: flex-end;
    margin-top: 5%;
    margin-right: 5%;

    text-decoration: underline;
    color: black;
}

.contentStyle {
    font-style: normal;
    font-size: 1em;
    text-align: center;
    word-break: break-word;
}

.centerize {
    display: flex;
    justify-content: center;
    align-items: center;
}

.theme--light.v-divider {
    border-color: rgba(1, 1, 1, 1) !important;
}
</style>