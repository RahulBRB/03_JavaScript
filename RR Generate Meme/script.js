const generateButton = document.querySelector(".generate");
const titleIP = document.querySelector(".meme-title");
const imageIP = document.querySelector(".meme-image");
const authorIP = document.querySelector(".meme-author");
const customLink = document.querySelector(".reddit-link");

let reddits = ["dankmemes", "memes", "wholesomememes", "me_irl", "funny", "comedyheaven", "surrealmemes", "terriblefacebookmemes"];


function getMeme(){

        const randomNum = Math.random()*reddits.length;
        const randomIndex = Math.floor(randomNum);
    
        fetch(`https://meme-api.com/gimme/${reddits[randomIndex]}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                // console.log(data);
                // title.innerText = data.title;
                // image.src = data.url;
                // author.innerText = data.author;
            
                const { title, url, author } = data;
                titleIP.innerText = title;
                imageIP.src = url;
                authorIP.innerText = `Meme By: ${author}`;
            
            })
}

getMeme();

generateButton.addEventListener("click", getMeme);

