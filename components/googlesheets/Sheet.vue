<template>
<div class="container-fluid">
		<div class="row">
			<main role="main" class="col-md-12 ml-sm-auto col-lg-12 mt-0 pt-3 px-4">
					<h2 class="center">Gigs</h2>
					<v-divider></v-divider>
				<div class="mb-5 table-responsive">
				 <v-data-table
					:headers="headers"
					:items="rows"
					class="elevation-1">
				</v-data-table>
				<table class="table table-striped ">
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
					<tbody >
						<Row v-bind:key="row.id" v-for="row in rows" v-bind:row="row" />
					</tbody>
				</table>
				</div>
				<v-row class="center mt-15" v-if="loading">
					<v-col
						cols="12"
						>
						<v-progress-circular
				:size="150"
						color="blue"
						indeterminate
				> Loading...
						</v-progress-circular>
				</v-col>
		</v-row>
			</main>
		</div>
	</div>
</template>

<script>

import Row from '@/components/googlesheets/Row.vue';
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('@/client_secret.json');
	export default {
		name: "Sheet",
		components: {
			Row
		},
		props: ["sheet"],
		data() {
			return {
				headers: [
 {
 text: 'Company',
 align: 'start',
 sortable: false,
 value: 'Agent',
 }
 ],
				rows: [],
				loading: true,
			}
		},
		methods:{
			async accessSpreadSheet() {
				const doc = new GoogleSpreadsheet(process.env.GS_MXDV_KEY);
				await doc.useServiceAccountAuth(creds);
				await doc.loadInfo();
				const sheet = doc.sheetsByIndex[0];
				const  rows = await sheet.getRows({
					offset: 1
				})
				this.rows = rows;
				this.loading = false;
			}
		},
		created() {
			this.accessSpreadSheet();
			// testing console.log(process.env.VUE_APP_API_KEY)
		}

	}
</script>
<style scoped>
.table-responsive {
    display: block;
    width: 100%;
    box-shadow: 0px 0px 10px -6px;
    overflow-x: auto;
    border-radius: 10px;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
}
thead {
    background-color: #343a40d6;
    color: white;
}
.table thead {
	text-align: -webkit-center;
}
.table td {
	text-align: -webkit-center;
}
</style>
