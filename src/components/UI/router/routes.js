import About from "../../../pages/About";
import PostIdPage from "../../../pages/PostIdPage";
import Posts from '../../../pages/Posts';
import Login from '../../../pages/Login';

export const privateRoutes = [
    {
        element: <About/>,
        index: true
    },
    {
        path: "/posts",
        element: <Posts/>
    },
    {
        path: "/posts/:id",
        element: <PostIdPage/>
    }
]

export const publicRoutes = [
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/posts",
        element: <Login/>
    },

    {
        path: "/posts/:id",
        element: <Login/>
    }
]