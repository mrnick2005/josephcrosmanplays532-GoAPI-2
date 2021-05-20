module.exports = {
	xmlFail(message = "Somthing must have failled while trying to do somthing. please try again later or try somthing different.") {
		return `<error><code>ERR_ASSET_404</code><message>${message}</message><text></text></error>`;
	},
};
