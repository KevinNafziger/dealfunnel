<template>
	<tr>
		<td><b>{{row.Company}}</b> <br> <!--<img class="logo-img pt-2" :src="row.Logo_URL"/>--> </td>
		<td>{{row.Recruiter}}</td>
		<td>{{row.Agent}}</td>
		<td>{{row.Position}}</td>
    <td>{{row.Location}}</td>
		<td>{{row.Term}}</td>
	</tr>
</template>

<script>
	export default {
		name: "Row",
		props: ["row"],
	}

</script>

<style scoped>
img.logo-img {
    height: auto;
		max-height: 50px;
    max-width: 100px;
}
.table-striped tbody tr:nth-of-type(odd) {
    background-color: #343a404a;
}
.table-striped tbody tr:nth-of-type(even) {
    background-color: #343a408c;
}
tr {
	transition:0.5s;
}
tr:hover {
	box-shadow: 0px 0px 19px -3px #343a40 !important;
}

</style>
