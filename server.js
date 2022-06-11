const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const boondocks = {
    'huey freeman':{
         'gender':'Male',
         'born': 'November 24, 1995',
         'age':'10',
         'ethnicity':'Black',
         'personality':'Huey is a highly intelligent 10-year-old boy, who rarely smiles or laughs, and recognizes and detests the absurdities (both obvious and perceived) of the society in which he lives. His cynicism often touches upon subjects such as politics, religion, the media, businesses and corporations, African-American culture, and American society as a whole. Tending to be obstinate in both manner and speech, Huey has demonstrated a depth of understanding that would seem to surpass his young age, such as knowing roughly what is going to happen in the future based on the actions and personalities of the people involved.',
         'image':'https://boondocks.fandom.com/wiki/Huey_Freeman',

    },
    'riley freeman':{
        'gender':'Male',
        'born': 'July 15, 1997',
        'age':'8',
        'ethnicity':'Black',
        'personality':'Riley is a highly impressionable third grader. He embraces the stereotypical "gangsta" lifestyle, doing his best to promote the urban culture in the contrasting suburb of Woodcrest. Influenced by the mass media via rap music and television, he frequently uses poor grammar, and tends to defend his idols even when his imitations go against common sense and righteousness.',
         'image':'https://static.wikia.nocookie.net/boondocks/images/7/74/Riley-freeman.jpeg/revision/latest?cb=20180606123151'
    },
    'robert freeman':{
        'gender':'Male',
        'born': '1920s',
        'age':'unknown',
        'ethnicity':'Black',
        'personality':'Robert has been shown to be extremely prideful, impatient and intolerant. He believes in strict discipline, quick to go for his belt when the boys step out of line.  He is not exactly the best parental figure or influence. He is perfectly fine with sneaking into movies without paying. A dream sequence revealed that he is cowardly and quick to abandon friends and family to save himself.', 
        'image':'https://static.wikia.nocookie.net/boondocks/images/c/cf/Robert_Freeman.png/revision/latest?cb=20140401024601'  
    },
    'jazzmine dubois':{
        'gender':'Female',
        'born': 'September 15,1995',
        'age':'10',
        'ethnicity':'Black', 
        'personality':'Jazmine is shown to be wide-eyed and emotional, sometimes to the point of being melodramatic.  Overall though, Jazmine is a naive but benevolent and considerate person. Her kindness is most often shown through her interactions with Huey. Despite his pessimistic and mean-spirited attitude, she remains supportive and friendly with him. She enthusiastically applauds for Hueys play Black Jesus and assists him with a number of his schemes. She even compliments him on occasion, expressing faith in his intelligence even if no one else does',
         'image':'https://static.wikia.nocookie.net/boondocks/images/2/28/Jazmine.jpg/revision/latest?cb=20140902010150',
    },
    'sarah dubois':{
        'gender':'Female',
        'born': 'unknown',
        'age':'30s-40s',
        'ethnicity':'white',  
        'personality':'Sarah, like her husband, is liberal and fiercely political. She focuses her efforts on political action against the conservative parties. She is extremely usual about her interracial marriage, even going so far as to joke about it when Tom is mocked and attacked for it.While it seems that Sarah has extremely little to no respect for Tom and seems to "regret" marrying him, she does in fact love him. She "dominates" the marriage and acts as the reigning authority in the household. She also displayed a considerably self-centered side as she blatantly flirted with other men such as Usher while knowing how much it upset Tom.',
        'image':'https://static.wikia.nocookie.net/boondocks/images/a/ab/IMG_E5793.JPG/revision/latest?cb=20200708170106',
    },
    'tom dubois':{
        'gender':'Male',
        'born': 'unknown',
        'age':'30s-40s',   
         'ethnicity':'white',
         'personality':'Tom is portrayed as a loving family man, who is very close to his white wife and biracial daughter Jazmine. Toms hobbies include singing and playing the piano, and he once dreamed of becoming a successful recording artist, though his wife and friends detest his singing.',
         'image':'https://static.wikia.nocookie.net/boondocks/images/0/07/Mister_Dubois.jpg/revision/latest?cb=20120602135553',
    },
    'uncle ruckus':{
        'gender':'Male',
        'born': 'July 4',
        'age':'70s-80s', 
        'ethnicity':'white',
        'personality':'His role in the series varies depending on the storyline of the episode hes featured in. He can either be one of the main antagonists, major anti-hero, or neutral. He is a black man who firmly doesnt like black people. An overweight, horrid, detestable homely man with one oversized glass-eye, he enjoys disassociating himself from other Black as much as possible, and is outspoken in his support of what Huey calls the white supremacist power structure.',
        'image':'https://static.wikia.nocookie.net/boondocks/images/e/e2/Ruckus_showdown.jpg/revision/latest?cb=20130910181834',
    },

        

    
    
    }
   
app.get('/', (request,response) => {
response.sendFile(__dirname + '/index.html')
})

app.get('/api/:characterName',(request,response) => {
    const characterName = request.params.characterName.toLowerCase()
    if(boondocks[characterName]){
    response.json(boondocks[characterName])
} else{
    response.json(boondocks['unavailable'])
}

})
app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running!')

})
