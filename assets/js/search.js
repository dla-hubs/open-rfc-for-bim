async function getPosts() {
	const response = await fetch("/search.json");
	if (response.status == 200) {
		const json = response.json().then();
		return json;
	}
	throw new Error(response.status);
}

const searchParams = new URLSearchParams(window.location.search);
const query = searchParams.get("query");

if (query) {
	const posts = getPosts();

	posts.then((posts) => {
		const idx = lunr(function() {
			this.ref("seq");
			this.field("title");
			this.field("summary");
			this.field("tags");

			posts.map((item) => {
				this.add({
					seq: item.seq,
					title: item.title,
					tags: item.tags,
					summary: item.summary,
				});
			});
		});

		const result = idx.search(query);

		displayResults(result, posts, query);
	});
}

function displayResults(result, posts, query) {
	const searchResultInfo = document.getElementById("search-result-info");
	const searchResults = document.getElementById("result");
	const noSearchResultTip = document.getElementById("no-result-tip");


	if (result.length == 0) {
		searchResultInfo.innerHTML = `No Results Founds for "${query}"`;
		noSearchResultTip.style.display = "block";
	} else {
		searchResultInfo.innerHTML = result.length === 1
			? `${result.length} RFC Found for "${query}"`
			: `${result.length} RFCs Found for "${query}"`;

		let resultList = "";

		result.map((index) => {
			const realIndex = index.ref - 1;
			const lastMod = new Date(posts[realIndex].lastmod);
			const lastModFmt = lastMod.toLocaleDateString('en-us', { year: "numeric", month: "short" })
			const isClosed = posts[realIndex].closed;

			resultList += `
				<div class="list-items">
					<a id="number" href=${posts[realIndex].uri}>
						${posts[realIndex].seq.toString().padStart(3, "0")}
					</a>
					<div id="title">${posts[realIndex].title}</div>
					<div id="summary">${posts[realIndex].summary}</div>
					<div id="tags">
			`;
			posts[realIndex].tags.map((tag) => {
				resultList += `
						<a id="tag" href=/tags/${tag}>
							${tag}
						</a>
				`;
			});
			resultList += `
						<a id="tag" class="tag-date">
							${lastModFmt}
							<span class="tooltip-date">The last modified date</span>
						</a>
						<a id="tag" class=${isClosed ? "status-closed" : "status-open"}>
							${isClosed ? "CLOSED" : "OPEN"}
							<span class="tooltip-status">The status of RFC</span>
						</a>
					</div>
				</div>
			<hr>`;
		});

		searchResults.innerHTML += resultList;
	}
}
