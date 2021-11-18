<style scoped>

html {
    overflow-y: hidden !important;
}

h2 {
    font-stretch: expanded;
}

.table-responsive {
    display: block;
    width: 100%;
    box-shadow: 0px 0px 10px -6px;
    border-radius: 10px;
}

thead {
    background-color: #343a40d6;
    color: white;
    vertical-align: baseline !important;
}

.table thead tr {
    text-align: -webkit-center;
    width: 100%;
}

.table td {
    text-align: -webkit-center;
}

.table-span {
    width: 100%;
    height: 500px;
    display: block;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    overflow-x: auto;
}

.table thead th {
    width: 206px !important;
    min-width: 200px;
}

.table td {
    width: 206px !important;
}


/* vuetify table classes */

th.text-start {
    color: white !important;
}

img.logo-img {
    height: auto;
    max-height: 50px;
    max-width: 50px;
}

i.v-icon.notranslate.v-data-table-header__icon.mdi.mdi-arrow-up.theme--light {
    color: #ffffff !important;
}

i.v-icon.notranslate.mdi.mdi-menu-down.theme--light {
    color: #1976d2 !important;
}

i.v-icon.notranslate.mdi.mdi-chevron-right.theme--light,
i.v-icon.notranslate.mdi.mdi-chevron-left.theme--light {
    color: #1976d2;
}

.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th {
    padding-top: 10px;
    background: #333333;
}


.v-application--is-ltr .v-text-field .v-label {
    color: #b0bcc9 !important;
}


.theme--light.v-chip:not(.v-chip--active) {
    background: #1976d2 !important;
    color: #ffffff;
}

</style>

<template>

<div class="container-fluid">
    <div class="row">
        <main role="main" class="col-md-12 ml-sm-auto col-lg-12 pt-5 px-4">

						<h2 class="center">Gigs</h2>
            <v-divider></v-divider>
						<v-data-table v-if="loading" item-key="name" class="elevation-1" loading loading-text="Loading SD data... Please wait"></v-data-table>
            <div v-else class="mb-5  table-responsive">
                <v-data-table :headers="headers" :search="search" :items="rows" class="elevation-1">
									<template v-slot:top>
                        <v-text-field append-icon="mdi-magnify" v-model="search" :label="searchLabel" class="mx-4"></v-text-field>
                    </template>
							  </v-data-table>
                <!-- <table class="table table-striped ">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Recruiter</th>
                            <th>Agent</th>
                            <th>Position</th>
                            <th>Location</th>
                            <th>Term</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Row v-bind:key="row.id" v-for="row in rows" v-bind:row="row" />
                    </tbody>
                </table> -->
            </div>
        </main>
    </div>
</div>

</template>

<script>

//import Row from '@/components/googlesheets/Row.vue';
const {
    GoogleSpreadsheet
} = require('google-spreadsheet');
const creds = require('@/client_secret.json');
export default {
    name: "Sheet",
    components: {
      //  Row
    },
    props: ["sheet"],
    data() {
        return {
            headers: [
							{
                text: 'Company',
                align: 'start',
                sortable: false,
                value: 'Company',
              },
						  {
								text: 'Agent',
								value: 'Agent'
							},
						  {
								text: 'Recruiter',
								value: 'Recruiter'
							},
						  {
								text: 'Position',
								value: 'Position'
							},
						  {
								text: 'Location',
								value: 'Location'
							},
							{
								text: 'Term',
								value: 'Term'
							}
					],
            //rows: [],
            loading: true,
            search: '',
					searchLabel: 'Search',
        }
    },
    methods: {
        async accessSpreadSheet() {
            const doc = new GoogleSpreadsheet(process.env.GS_MXDV_KEY);
            await doc.useServiceAccountAuth(creds);
            await doc.loadInfo();
            const sheet = doc.sheetsByIndex[0];
            const rows = await sheet.getRows({
                offset: 1
            })
            this.rows = rows ;
            this.loading = false;
        }
    },

    created() {
        this.accessSpreadSheet();
        // testing console.log(process.env.VUE_APP_API_KEY)
    }

}

</script>
