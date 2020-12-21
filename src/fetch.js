function encodeUrlParams(data) {
    return Object.keys(data)
      .map(key => [key, data[key]].map(encodeURIComponent).join("="))
      .join("&");
}

const FetchData = ({method, data={}, url, query={}}) => {
    const part_url = query ? `${url}/?${encodeUrlParams(query)}` : url
    return fetch('http://localhost:3000'+part_url, {
        method: method,
        body: JSON.stringify(data),
        header: new Headers({
            'Content-Type': 'application/json',
            'token': `BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMDE4MjE0ODc3LCJ1c2VyX25hbWUiOiJXZW5keSIsInVzZXJfcGFzc3dvcmQiOiI4NzciLCJ1c2VyX3Rva2VuIjpudWxsLCJpYXQiOjE2MDg1MTk4ODIsImV4cCI6MTYwODc3OTA4Mn0.5pf4kPq2JV2cTXvNgrKgCzylDNGvqC9LjCpMpmD223Q`
        })
    }).then(res => {
        return res.json();
    }).catch(error => console.error("error:",error)) 
}
export default FetchData
