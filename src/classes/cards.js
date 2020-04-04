/**
 * Handles content validation
 * Handles content filtering
 * @param {Array} content
 */
class Content {
    constructor(content) {
        this.content = this.fixContent(this.sortContent(content));
    }

    /**
     * Ensure the email address is all lowercase
     * Ensure the email address has no whitespace
     * @param {String} email
     * @return {Object}
     */
    validateEmail(email) {
        let validEmail = email.trim().toLowerCase();

        return {
            link: `mailto:${validEmail}`,
            readableLink: validEmail
        }
    }

    /**
     * Ensure the URLs are properly set
     * e.g. a URL starting with www. should be prepended with http://
     * @param {String} url 
     * @return {Object}
     */
    validateUrl(url) {
        if (typeof url === 'string') {
            let link = url.trim();
            let readableLink = 'Visit website';

            // Link logic
            if (!link.includes('https://') && !link.includes('http://') && !link.includes('@')) {
                link = `http://${url}`;
            }

            return {
                link: link,
                readableLink: readableLink
            };
        }
    }

    /**
     * Validate our array of content
     * @param {Array} content
     * @return {Array}
     */
    fixContent(content) {
        if (content.length > 0) {
            content.forEach((item) => {
                if (item.website && typeof item.website === 'string') {
                    item.website = this.validateUrl(item.website);
                }

                if (item.email && typeof item.email === 'string') {
                    item.email = this.validateEmail(item.email);
                }

                if (item.type && typeof item.type === 'string') {
                    item.type = item.type.trim();
                }
            });
        }

        return content;
    }

    /**
     * Sort content alphabetically
     * @return {Array}
     */
    sortContent(content) {
        if (content) {
            return content.sort((a, b) => a.name.localeCompare(b.name));
        }
    }

    /**
     * Update URL parameters when filtering
     * @param {String} filterName
     */
    updateURL(filterName) {
        const urlParam = filterName === 'all' ? '/' : `/?filter=${encodeURIComponent(filterName)}`;
        history.pushState(null, `Filtered by ${filterName}`, urlParam);
    }

    /**
     * Filter content by category
     * @param {String} filterName 
     * @return {Array}
     */
    filterContent(filterName) {
        let filteredContent = this.content;
        this.updateURL(filterName);

        if (filterName !== 'all') {
            filteredContent = this.content.filter(item => {
                return item.type === filterName;
            });
        }

        return filteredContent;
    }

    /**
     * Get array of filters
     * 1. Array out item types
     * 2. Strip out duplicate entries
     * 3. Sort alphabetically
     * @return {ArrayBufferConstructor}
     */
    getFilters() {
        // Array of just item.types
        const allFilters = this.content.map(item => {
            if (item.type !== "") {
                return item.type;
            }
        });

        // Strip out duplicates
        const uniqueFilters = [...new Set(allFilters)];

        // Sort filter alphabetically
        const sortedFilters = uniqueFilters.sort((a, b) => a.localeCompare(b));

        return sortedFilters;
    }

    /**
     * Return validated content
     * @return {Array}
     */
    getContent() {
        return this.content;
    }
}

export default Content;