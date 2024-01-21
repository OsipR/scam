export async function HttpNoData(url, method) {

    if(!(url.includes('/api/posts/2004/2024') && method == 'GET'))
        return { error: 'not found command' }

    try {
        var response = await fetch(url);
    } catch (error) { }

    let result = [];

    const count = getRandomInt(25, 75);

    for (let i = 0; i < count; i++)
        result.push({
            id: i,
            author: 'Николай' + (i % 2 == 0 ? i : 90),
            authorId: (i % 2 == 0 ? i : 90),
            date: getRandomInt(2004,2024)+'-01-01T12:12:12.1457',
            text: 'This example returns a random integer between the specified values. The value is no lower than min (or the next integer greater than min if min isnt an integer), and is less than (but not equal to) max.',
            isBlock: i % 4 == 0
        })

    return result;
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
