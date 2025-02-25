const url = 'https://purpleschool.ru/course/javascript';

function parseUrl() {
    const urlResp = [];
    let path;

    if (!url.includes('://')) {
        path = url;
    } else {
        const splitUrl = url.split('://');
        urlResp.push(splitUrl[0]);
        path = splitUrl[1];
    }

    const [host, ...query] = path.split('/');

    if (!host.includes('.')) {
        return;
    }

    const hostAddrChunk = host.split('.');
    if (hostAddrChunk.length > 0) {
        for (i = 0; i < hostAddrChunk.length; i++) {
            if (hostAddrChunk[i].length === 0) {
                return;
            }
        }
    }

    urlResp.push(host);

    if (query.length) {
        urlResp.push(`/${query.join('/')}`);
    }
    
    return urlResp;
}

function getUrlParts(url) {
    const [protocol, _, host, ...path] = url.split('/');
    if (protocol === 'https:' || protocol === 'http:') {
        if (!host.includes('.')) {
            return;
        }
        console.log(protocol, host, path);
        console.log(`Протокол: ${protocol.split(':')[0]}`);
        console.log(`Доменное имя: ${host}`);
        console.log(`Путь внутри сайта: /${path.join('/')}`);
    }
}

getUrlParts(url);