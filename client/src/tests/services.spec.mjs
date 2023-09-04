import * as requester from "../services/requester.js";


describe('services',function() {

describe('movieService.js',function() {
    let movieServices;
    let moviesPerPage;
    let baseUrl;
    let moviesData;
    let getAllSpy;
    let getPagesSpy;

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
        ]

        getAllSpy = spyOn(requester,'get').and.returnValue(Promise.resolve(moviesData))
        getPagesSpy = spyOn(requester,'get').and.returnValue(Promise.resolve(moviesData))

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
})

})