import React from 'react'


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY



export const usegif = (tag) => {

    const randommemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`; 
    const tagmemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(false)

    async function fetchData(tag) {
        setLoading(true)

        // yaha hame tag k basis pr gif laod karani h to hamne bss api k ul m changes kiye &tag=${tag} isse hogya ye pr ye hrr api pr nhi hoga agr api support krti hogi to atbhi hoga

        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;  
        const {data} = await axios.get(tag ? (tagmemeurl) : (randommemeurl));
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource )
        setLoading(false)
    }
 
    useEffect( () => {
        fetchData();
    }, [])

    return{gif, loading, fetchData}

  }

