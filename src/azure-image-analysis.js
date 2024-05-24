import axios from "axios";

async function analyzeImage(imageUrl){
    const endpoint = "https://cvailearnai.cognitiveservices.azure.com/";
    const apiKey = "b697f756adc948fdae3d6c06a1f3f58f";
    const url = 'https://cvailearnai.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-10-01&features=caption,read&language=en';
    const headers= {
        "Ocp-Apim-Subscription-Key": apiKey,
        "Content-Type": "application/json", 
    }
    const params= {
        "features" :"caption,read",
        "language" : "en",
    }
    try{
        const response = await axios.post(
            url,
            {'url' : imageUrl},
            {params,headers}
        );
        return response.data;
    }catch (Error){
        console.error("error analysis image:" ,Error);
        throw Error;
    }
    
}
export default analyzeImage;
