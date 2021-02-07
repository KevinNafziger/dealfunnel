export default async function ({store, from}) {
	
	let isInitialPageLoad = !from;
	if (isInitialPageLoad) {
		
      store.dispatch("posts/setAllPosts")
      store.dispatch("company/setAllCompanies")
      store.dispatch("news/setAllNews")
      store.dispatch("raise/setAll")

    }
}
