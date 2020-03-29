class Content {
    constructor( content ) {
        this.content = content;
        this.sortedContent = this.sortByName(content);
        this.fixedContent = this.fixContent(this.sortedContent);
    }

    validateUrl(url) {
        let link = url.trim();

        // Link logic
        if (!link.includes('https://') && !link.includes('http://') && !link.includes('@')) {
            link = `http://${url}`
        } else if (url.includes('@')) {
            link = `mailto:${link}`;
        }

        return link;
    }

    fixContent(content) {
        content.forEach(item => {
            if (item.website) {
                item.website = this.validateUrl(item.website);
            }
        });

        return content;
    }

    sortByName() {
        return this.content.sort((a, b) => a.name.localeCompare(b.name));
    }

    getContent() {
        return this.fixedContent;
    }
}

export default Content;