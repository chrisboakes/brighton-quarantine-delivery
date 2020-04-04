class Content {
    constructor( content ) {
        this.content = content;
        this.sortedContent = this.sortByName(content);
        this.fixedContent = this.fixContent(this.sortedContent);
    }

    validateUrl(url) {
        if (typeof url === 'string') {
            let link = url.trim();
            let readableLink = 'Visit website';

            // Link logic
            if (!link.includes('https://') && !link.includes('http://') && !link.includes('@')) {
                link = `http://${url}`;
            } else if (url.includes('@')) {
                readableLink = link;
                link = `mailto:${link}`;
            }

            return {
                link: link,
                readableLink: readableLink
            };
        }
    }

    fixContent(content) {
        content.forEach((item) => {
            if (item.website && typeof item.website === 'string') {
                item.website = this.validateUrl(item.website);
            }
        });

        return content;
    }

    sortByName() {
        let data = [{
            name: 'Please try reloading',
            goods: 'There is a lot of traffic right now. Please reload the page.'
        }];

        if (!this.content.message) {
            data = this.content.sort((a, b) => a.name.localeCompare(b.name));
        }

        return data;
    }

    getFilters() {
        // Array of just item.types
        const allFilters = this.content.map(item => {
            if (item.type !== "") {
                return item.type;
            }
        });

        // Strip out duplicates
        const uniqueFilters = [...new Set(allFilters)];

        return uniqueFilters;
    }

    getContent() {
        return this.fixedContent;
    }
}

export default Content;