const keyToken = 'secret_4OJ3ydrZJlDjHuWE5wEiSrGZy2Rauk7DaT4RWqagE0V';
const baseId = '2f20ce42727048afae7e05d3dd138a2e';


async function peticionBd() {
    const response = await fetch(`https://api.notion.com/v1/databases/${baseId}/query`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${keyToken}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2021-05-13'
        },
        body: JSON.stringify({
            // 
        })
    });


    const data = await response.json;
    console.log(data);
}

export default peticionBd;