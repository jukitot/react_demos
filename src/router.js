import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {TodosPage} from "./pages/TodosPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostsPage} from "./pages/PostsPage";
import {ErrorPage} from "./pages/ErrorPage";
import {Albums} from "./components/AlbumsContainer/Albums";
import {AlbumsPage} from './pages/AlbumsPage'


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>,errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'todos'}/>
            },
            {
                path: 'todos', element: <TodosPage/>
            },
            {
                path: 'albums', element: <AlbumsPage/>
            },

            {
                path: 'comments', element: <CommentsPage/>

            },

            {
                path: 'comments/post', element: <PostsPage/>
            }



        ]
    }


])

export {router}