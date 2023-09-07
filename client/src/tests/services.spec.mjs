import * as requester from "../services/requester.js";


describe('services',function() {

describe('movieService.js',function() {
    let movieServices;
    let moviesPerPage;
    let baseUrl;
    let moviesData;
    let getAllSpy;
    let getPagesSpy;
    let getOneSpy;
    let deleteOneSpy;
    let editOneSpy;
    let editedMovie;
    let createSpy;
    let createdMovie;
    let getLikeSpy;
    let updateLikeSpy;
    let alertLikeSpy;
    let getRemoveLikeSpy;
    let updateRemoveLikeSpy;

    beforeEach(function() {
        moviesPerPage = 5;
        baseUrl = 'http://localhost:5000';
        moviesData = [
            {
                _id: '644ee3e9cab7747841f70eee',
                title: 'Avatar: the way of water',
                year: 2009,
                runtime: 162,
                genre: 'fantasy',
                description: 'testing',
                imageUrl: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1294&q=80",
                owner: '644ededb72e425c49c6b14af',
                __v: 0,
                likes: [
                    '6453e59987886e2de0a509f5',
                    '64515a43e5f1e924a0112924'
                ]
            },
            {
                _id: '644f9b7c7fa7155a6888d730',
                title: '300',
                year: 2006,
                runtime: 117,
                genre: 'Action',
                description:'more testing',
                imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjc4OTc0ODgwNV5BMl5BanBnXkFtZTcwNjM1ODE0MQ@@._V1_.jpg',
                owner: '644ededb72e425c49c6b14af',
                __v: 0,
                likes: [
                    '64515a43e5f1e924a0112924'
                ]
            },
            {
                _id: '644fa8ea4a2ca04aef2ede42',
                title: 'The Avengers',
                year: 2012,
                runtime: 143,
                genre:'Action,Sci-fi',
                description:'omg',
                imageUrl:'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg',
                owner: '644ededb72e425c49c6b14af',
                __v: 0,
                likes: [
                    '64515a43e5f1e924a0112924'
                ]
            },
            {
                _id: '64515a58e5f1e924a0112928',
                title: 'sasa',
                year: 222,
                runtime: 114,
                genre:'fa',
                description:'hehe',
                imageUrl:'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg',
                owner:'64515a43e5f1e924a0112924',
                __v:0,
                likes: [
                    '644ededb72e425c49c6b14af',
                    '6453e59987886e2de0a509f5'
                ]
            },
            {
                _id: '64515a68e5f1e924a011292c',
                title: 'eeeee',
                year: 222,
                runtime: 111,
                genre:'fa',
                description:'amazing description',
                imageUrl:'https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg',
                owner:'64515a43e5f1e924a0112924',
                __v:0,
                likes: [
                    
                ]
            },
            {
                _id: '64515a8ce5f1e924a0112930',
                title: 'xxx',
                year: 1234,
                runtime: 22,
                genre:'omg',
                description:'nnnnnn',
                imageUrl:'https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg',
                owner:'64515a43e5f1e924a0112924',
                __v:0,
                likes: [
                    '644ededb72e425c49c6b14af'
                ]
            },
        ];

         editedMovie = {
            _id: '644ee3e9cab7747841f70eee',
            title: 'Avatar',
            year: 2009,
            runtime: 162,
            genre: 'fantasy,action',
            description: 'testing',
            imageUrl: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1294&q=80",
            owner: '644ededb72e425c49c6b14af',
            __v: 0,
            likes: [
                '6453e59987886e2de0a509f5',
                '64515a43e5f1e924a0112924'
            ]
        };

        createdMovie = {
            _id: '644113e9cab7747841f70xxx',
            title: 'Boys',
            year: 2013,
            runtime: 120,
            genre: 'action',
            description: 'amazing tv series',
            imageUrl: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1294&q=80",
            owner: '644ededb72e425c49c6b14af',
            __v: 0,
            likes: [
               
            ]
        }

        getAllSpy = spyOn(requester,'get').and.returnValue(Promise.resolve(moviesData))
        getPagesSpy = spyOn(requester,'get').and.returnValue(Promise.resolve(moviesData))
        getOneSpy = spyOn(requester,'get').and.returnValue(Promise.resolve(moviesData[0]))
        deleteOneSpy = spyOn(requester,'del').and.returnValue(Promise.resolve(moviesData[0]))
        editOneSpy = spyOn(requester,'put').and.returnValue(Promise.resolve(editedMovie))
        createSpy = spyOn(requester,'post').and.returnValue(Promise.resolve(createdMovie))
        getLikeSpy = spyOn(requester,'get').and.returnValue(Promise.resolve(moviesData[0]));
        updateLikeSpy = spyOn(requester,'put').and.returnValue(Promise.resolve(moviesData[0]))
        alertLikeSpy = spyOn(window,'alert')
        getRemoveLikeSpy = spyOn(requester,'get').and.returnValue(Promise.resolve(moviesData[0]));
        updateRemoveLikeSpy = spyOn(requester,'put').and.returnValue(Promise.resolve(moviesData[0]))

        movieServices = {
            getAll: async function(currentPage) {
    let result = await getAllSpy(`${baseUrl}/movies`)
    const trimStart = (currentPage - 1) * moviesPerPage
    const trimEnd = trimStart + moviesPerPage
    result = result.slice(trimStart,trimEnd)
    return result
            },

            getTotalPages: async function() {
    let result = await getPagesSpy(`${baseUrl}/movies`)
    let totalMovies = result.length
    const totalPages = Math.ceil(totalMovies / moviesPerPage);
    return totalPages
            },

            getOne: async function(movieId) {
    const result = await getOneSpy(`${baseUrl}/movies/${movieId}`)
    return result
            },

            deleteOne: async function(movieId) {
    const result = await deleteOneSpy(`${baseUrl}/movies/${movieId}`)
    return result
            },

            edit: async function(movieId,data) {
    const result = await editOneSpy(`${baseUrl}/movies/${movieId}`,data)
    return result
            },

            create: async function(movieData) {
    const result = await createSpy(`${baseUrl}/movies/create`,movieData)
    return result;
            },

            addLike: async function(movieId,userId) {
    let movie = await getLikeSpy(movieId)

    if(movie.likes.includes(userId)) {
        alertLikeSpy('User already liked this movie')
        return
    }
    
    movie.likes.push(userId)
    const result = await updateLikeSpy(`${baseUrl}/movies/${movieId}`,movie)
    return result
    },

            removeLike: async function(movieId,userId) {
    let movie = await getRemoveLikeSpy(movieId)
    const position = movie.likes.indexOf(userId)
            
    if(position !== -1) {
    movie.likes.splice(position,1)
    } 
            
    const result = await updateRemoveLikeSpy(`${baseUrl}/movies/${movieId}`,movie)
    return result
        }
        }
    })

        it('should call getAll method and display no more than 5 movies on page 1', async function () {
            const currentPage = 1;
            let result = await movieServices.getAll(currentPage)
            expect(getAllSpy).toHaveBeenCalledWith(`${baseUrl}/movies`);
            expect(getAllSpy).toHaveBeenCalledTimes(1)
            expect(result.length).toBeGreaterThanOrEqual(0)
            expect(result.length).toBeLessThanOrEqual(5)
    })

    it('should call getAll method and display no more than 5 movies on page 2', async function () {
        const currentPage = 2; 
        let result = await movieServices.getAll(currentPage)
        expect(getAllSpy).toHaveBeenCalledWith(`${baseUrl}/movies`);
        expect(getAllSpy).toHaveBeenCalledTimes(1)
        expect(result.length).toBeGreaterThanOrEqual(0)
        expect(result.length).toBeLessThanOrEqual(5)
    })

    it('should call getTotalPages method and calculate total pages', async function() {
        let totalPages = await movieServices.getTotalPages()
        expect(getPagesSpy).toHaveBeenCalledWith(`${baseUrl}/movies`);
        expect(getPagesSpy).toHaveBeenCalledTimes(1)
        expect(totalPages).toBe(2)
    })

    it('should call getOne method and return correct movie',async function() {
        const movieId = moviesData[0]._id;
        let movie = await movieServices.getOne(movieId)
        expect(getOneSpy).toHaveBeenCalledWith(`${baseUrl}/movies/${movieId}`)
        expect(getOneSpy).toHaveBeenCalledTimes(1)
        expect(movie).toEqual(moviesData[0])
        expect(movie).not.toEqual(moviesData[1])
    })

    it('should call deleteOne method and delete a movie from the collection',async function() {
        const movieId = moviesData[0]._id;
        let movie = await movieServices.deleteOne(movieId)
        expect(deleteOneSpy).toHaveBeenCalledWith(`${baseUrl}/movies/${movieId}`)
        expect(deleteOneSpy).toHaveBeenCalledTimes(1)
    })

    it('should call edit method and edit movie details correctly',async function() {
        const movieId = moviesData[0]._id;
        let movie = await movieServices.edit(movieId,editedMovie)
        expect(editOneSpy).toHaveBeenCalledTimes(1)
        expect(editOneSpy).toHaveBeenCalledWith(`${baseUrl}/movies/${movieId}`,editedMovie)
        expect(movie).toEqual(editedMovie)
        expect(movie).not.toEqual(moviesData[0])
    })

    it('should call create method and add new movie to the collection',async function() {
        let newMovie = await movieServices.create(createdMovie)
        expect(createSpy).toHaveBeenCalledTimes(1)
        expect(createSpy).toHaveBeenCalledWith(`${baseUrl}/movies/create`,createdMovie)
        expect(newMovie).toEqual(createdMovie)
    })

    it('should call addLike method and add a like for selected movie if the movie is not already liked by the user',async function() {
        let movieId = '644ee3e9cab7747841f70eee';
        let userId = '544ee3e9cae7747842f70ee1'
        let movieLikesBeforeLike = moviesData[0].likes.length;
        let likedMovie = await movieServices.addLike(movieId,userId)
        expect(getLikeSpy).toHaveBeenCalledTimes(1)
        expect(getLikeSpy).toHaveBeenCalledWith(movieId)
        expect(updateLikeSpy).toHaveBeenCalledTimes(1)
        expect(updateLikeSpy).toHaveBeenCalledWith(`${baseUrl}/movies/${movieId}`,moviesData[0])
        expect(likedMovie.likes.length).toBe(3)
        expect(likedMovie.likes).toContain(userId)
        expect(likedMovie.likes.length).not.toBe(movieLikesBeforeLike)
    })

    it('should call addLike method and display alert message because user already liked this movie', async function() {
        let movieId = '644ee3e9cab7747841f70eee';
        let userId = '6453e59987886e2de0a509f5'
        let likedMovie = await movieServices.addLike(movieId,userId)
        expect(alertLikeSpy).toHaveBeenCalledWith('User already liked this movie')
        expect(alertLikeSpy).toHaveBeenCalledTimes(1)
        expect(updateLikeSpy).toHaveBeenCalledTimes(0)
        
    })

    it('should call removeLike method and remove like if the user already liked this movie',async function() {
        let movieId = '644ee3e9cab7747841f70eee';
        let userId = '6453e59987886e2de0a509f5';
        let movieLikesBeforeRemoveLike = moviesData[0].likes.length;
        let removeLikeFromMovie = await movieServices.removeLike(movieId,userId)
        expect(getRemoveLikeSpy).toHaveBeenCalledTimes(1)
        expect(getRemoveLikeSpy).toHaveBeenCalledWith(movieId)
        expect(updateRemoveLikeSpy).toHaveBeenCalledTimes(1)
        expect(updateRemoveLikeSpy).toHaveBeenCalledWith(`${baseUrl}/movies/${movieId}`,moviesData[0])
        expect(removeLikeFromMovie.likes.length).not.toBe(movieLikesBeforeRemoveLike)
        expect(removeLikeFromMovie.likes.length).toBe(1)
        expect(removeLikeFromMovie.likes).not.toContain(userId)
    })
})

describe('userService.js',function() {

let usersData;
let userServices;
let baseUrl;
let registerSpy;
let loginSpy;
let sessionSpy;
let logoutSpy;
let sessionRemoveSpy;

beforeEach(function() {
baseUrl = baseUrl = 'http://localhost:5000';

    usersData = [
        {   
            _id:'1',
            email: 'ivo@abv.bg',
            password: 1234
        },
        {
            _id:'2',
            email: 'ivan@abv.bg',
            password: 1234
        }
    ];

    registerSpy = spyOn(requester,'post').and.returnValue({email:'petar@abv.bg',password:1234})
    loginSpy = spyOn(requester,'post').and.returnValue(usersData[0])
    sessionSpy = spyOn(sessionStorage,'setItem')
    logoutSpy = spyOn(requester,'get')
    sessionRemoveSpy = spyOn(sessionStorage,'removeItem')

    userServices = {
        register: async function(email,password) {
            const result = await registerSpy(`${baseUrl}/users/register`, {email,password})
            return result
        },

        login: async function(email,password) {
            const result = await loginSpy(`${baseUrl}/users/login`, {email,password})
    
            if(!result.hasOwnProperty('message')) {
            sessionSpy('email', result.email)
            sessionSpy('authToken', 'token');
            sessionSpy('userId', result._id);
        }
            return result
        },

        logout: async function() {
            const result = await logoutSpy(`${baseUrl}/users/logout`)
            sessionRemoveSpy('email')
            sessionRemoveSpy('authToken')
            sessionRemoveSpy('userId')
            return result;
        }
    }

    
})

it('should call register method and register new user',async function() {
let email = 'petar@abv.bg'
let password = 1234
let newUser = await userServices.register(email,password)
expect(registerSpy).toHaveBeenCalledTimes(1)
expect(registerSpy).toHaveBeenCalledWith(`${baseUrl}/users/register`,{email,password})
expect(newUser.email).toBe(email)
expect(newUser.password).toBe(password)
})

it('should call login method and login user successfully', async function() {
    let email = 'ivo@abv.bg'
    let password = 1234
    let loggedUser = await userServices.login(email,password)
    expect(loginSpy).toHaveBeenCalledTimes(1)
    expect(loginSpy).toHaveBeenCalledWith(`${baseUrl}/users/login`, {email,password})
    expect(loggedUser.email).toBe(email)
    expect(loggedUser.password).toBe(password)
   expect(sessionSpy).toHaveBeenCalledTimes(3)
   expect(sessionSpy).toHaveBeenCalledWith('email','ivo@abv.bg')
   expect(sessionSpy).toHaveBeenCalledWith('userId','1')
   expect(sessionSpy).toHaveBeenCalledWith('authToken','token')
})

it('should call logout method and logout user successfully', async function() {
    let logoutUser = await userServices.logout()
    expect(logoutSpy).toHaveBeenCalledTimes(1)
    expect(logoutSpy).toHaveBeenCalledWith(`${baseUrl}/users/logout`)
    expect(sessionRemoveSpy).toHaveBeenCalledTimes(3)
    expect(sessionRemoveSpy).toHaveBeenCalledWith('email')
    expect(sessionRemoveSpy).toHaveBeenCalledWith('authToken')
    expect(sessionRemoveSpy).toHaveBeenCalledWith('userId')
})
})

describe('readHandler.js',function() {
    let readService;
    const speechSynthesisUtterance = jasmine.createSpy("SpeechSynthesisUtterance", ["rate"]);
    const speechSynthesis = jasmine.createSpyObj("speechSynthesis", ["speak","speaking"]);
    

    beforeEach(function() {

        readService = {
            readHandler: function(title,year,runtime,genre,description,likes) {
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
            
                    const titleUtterence = new speechSynthesisUtterance(titleText);
                    titleUtterence.rate = 0.7;
                    speechSynthesis.speak(titleUtterence);
            
                    const yearUtterence = new speechSynthesisUtterance(yearText);
                    yearUtterence.rate = 0.7;
                    speechSynthesis.speak(yearUtterence);
            
                    const runtimeUtterence = new speechSynthesisUtterance(runtimeText);
                    runtimeUtterence.rate = 0.7;
                    speechSynthesis.speak(runtimeUtterence);
            
                    const genreUtterence = new speechSynthesisUtterance(genreText);
                    genreUtterence.rate = 0.7;
                    speechSynthesis.speak(genreUtterence);
            
                    const descriptionUtterence = new speechSynthesisUtterance(descriptionText);
                    descriptionUtterence.rate = 0.7;
                    speechSynthesis.speak(descriptionUtterence);
            
                    const likesUtterence = new speechSynthesisUtterance(likesText);
                    likesUtterence.rate = 0.7;
                    speechSynthesis.speak(likesUtterence);
                }
            }
        }
    })
    it('should call readHandler method and read movie details correctly',function() {
      speechSynthesis.speaking = false;
      let handler = readService.readHandler('Avatar',2000,162,'sci-fi','movie description',2)
      let mockClick = new Event('click')
      handler(mockClick)
      expect(speechSynthesis.speak).toHaveBeenCalledTimes(6)
      expect(speechSynthesisUtterance).toHaveBeenCalledTimes(6)
    })

    
})

})