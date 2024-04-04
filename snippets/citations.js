// this isn't working for me 🙃

function convertToMarkdownLink(citation) {
    const regex = /Page Title: (.*?) \((https?: \/\/.*?)\)/g;

    let markdownLinks = [];

    let match;
    
    while ((match = regex.exec(citation)) !== null) {
        
        const title = match[1].trim();
        const url = match[2].trim();

        const markdownLink = `[${title}](${url})`;

        markdownLinks.push(markdownLink);
}

    return markdownLinks.join('\n');
}
workflow.citations = convertToMarkdownLink(turn.KnowledgeAgent.citations)