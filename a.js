async function a(){
    const res = await fetch('https://registry.npmjs.org/sixseven')
    const data = await res.json()
    return data
}console.log(await a())