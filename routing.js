/** @format */

// This is a function that takes a page path as an argument
// The function load the content of that page into the "content" div on the index file
async function loadPage(page) {
	try {
		// fetch the page
		const res = await fetch(page);
		if (!res.ok) {
			throw new Error(`Fetch failed with status ${res.status}`);
		}
		// get text from res
		const content = await res.text();
		// get the element with id 'content'
		const element = document.getElementById('content');
		// set innerHTML of the element
		element.innerHTML = content;
	} catch (error) {
		console.error('Fetch error:', err);
	}
}
