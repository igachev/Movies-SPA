export function readHandler(title,year,runtime,genre,description,likes) {
    return async function(e) {
        e.preventDefault()
        const titleText = `Title: ${title} `
        const yearText = `Year: ${year} `
        const runtimeText = `Runtime: ${runtime} minutes `
        const genreText = `Genre: ${genre} `
        const descriptionText = `Description: ${description} `
        const likesText = `Likes: ${likes} `
        
        if(speechSynthesis.speaking) {
            return
        }

        const titleUtterence = new SpeechSynthesisUtterance(titleText);
        titleUtterence.rate = 0.7;
        speechSynthesis.speak(titleUtterence);

        const yearUtterence = new SpeechSynthesisUtterance(yearText);
        yearUtterence.rate = 0.7;
        speechSynthesis.speak(yearUtterence);

        const runtimeUtterence = new SpeechSynthesisUtterance(runtimeText);
        runtimeUtterence.rate = 0.7;
        speechSynthesis.speak(runtimeUtterence);

        const genreUtterence = new SpeechSynthesisUtterance(genreText);
        genreUtterence.rate = 0.7;
        speechSynthesis.speak(genreUtterence);

        const descriptionUtterence = new SpeechSynthesisUtterance(descriptionText);
        descriptionUtterence.rate = 0.7;
        speechSynthesis.speak(descriptionUtterence);

        const likesUtterence = new SpeechSynthesisUtterance(likesText);
        likesUtterence.rate = 0.7;
        speechSynthesis.speak(likesUtterence);
    }
}