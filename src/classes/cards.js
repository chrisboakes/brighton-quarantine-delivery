class Content {
    constructor( content ) {
        this.content = content;
        this.sortedContent = this.sortByName(content);
        this.fixedContent = this.fixContent(this.sortedContent);
    }

    validateEmail(email) {
        let validEmail = email.trim().toLowerCase();

        return {
            link: `mailto:${validEmail}`,
            readableLink: validEmail
        }
    }

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

    fixContent(content) {
        content.forEach((item) => {
            if (item.website && typeof item.website === 'string') {
                item.website = this.validateUrl(item.website);
            }

            if (item.email && typeof item.email === 'string') {
                item.email = this.validateEmail(item.email);
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

    getContent() {
        return this.fixedContent;
    }
}

export default Content;