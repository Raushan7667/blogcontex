import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContex = createContext();
// step 1
function AppContexProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    // data filling
    async function fetchBlogPosts(page = 1) {

        setLoading(true);
// let url=`${baseUrl}get-blogs?page=${page}`;


        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url)
            const data = await result.json();
            // console.log(data);

            setPage(data.page)
            setPosts(data.posts)
            setTotalPages(data.totalPages)

        } catch (error) {
            console.log("error in fetch data");
            setPage(1)
            setPosts([])
            setTotalPages(null)

        }
        setLoading(false)
    }

    function handlepagechange(page) {
        setPage(page)
        fetchBlogPosts(page)

    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlepagechange
    };
    // step 2
    return <AppContex.Provider value={value}>

        {children}
    </AppContex.Provider>
}
export default AppContexProvider;
