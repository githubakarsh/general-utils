const urlParser = () => {
    const { hash, search} = window.location;

    const hashParser = hash
    .substring(1)
    .split('&')
    .reduce((params, pair) => {
        const [key, value] = pair.split('=');
        return value ? Object.assign({[key]: value}, params) : params;
    }, {});

    const queryParser = search
    .substring(1)
    .split('&')
    .reduce((params, pair) => {
        const [key, value] = pair.split('=');
        return value ? Object.assign({[key]: value}, params) : params;  
    }, {});

    return {hashParser, queryParser}
}

export default urlParser;

