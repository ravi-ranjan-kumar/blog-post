export const posts = [
    {
        id: 1,
        title: "His mother had always taught him",
        body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        userId: 5,
        createdAt: "2023-02-27",
        tags: [
            { id: '1', text: 'history' },
            { id: '2', text: 'american' },
            { id: '3', text: 'crime' }
        ],
    },
    {
        id: 2,
        title: "His mother had always taught him",
        body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        userId: 5,
        createdAt: "2023-03-31",
        tags: [
            { id: '1', text: 'history' },
            { id: '2', text: 'american' },
            { id: '3', text: 'crime' }
        ],
    },
    {
        id: 3,
        title: "His mother had always taught him",
        body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        userId: 5,
        createdAt: "2023-08-23",
        tags: [
            { id: '1', text: 'history' },
            { id: '2', text: 'american' },
            { id: '3', text: 'crime' }
        ],
    },
    {
        id: 4,
        title: "His mother had always taught him",
        body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        userId: 5,
        createdAt: "2023-05-26",
    },
    {
        id: 5,
        title: "His mother had always taught him",
        body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        userId: 5,
        createdAt: "2023-07-17",
        tags: [
            { id: '1', text: 'history' },
            { id: '2', text: 'american' },
            { id: '3', text: 'crime' }
        ],
    },
];


export const initialState = {
    posts: posts,
}

export const postsReducer = (state = initialState, action) => {
    console.log('lwkdjk');
    if (action.type === 'ADD_POSTS') {
        return {
            ...state, posts: state.posts.concat(action?.post)
        }
    }
    if (action.type === 'UPDATE_POST') {
        console.log(action.post);
        const posts = state?.posts?.map(post => {
            if (post?.id === action?.post?.id) {
                return action?.post
            }
            return post
        })
        return {posts}
    }
}