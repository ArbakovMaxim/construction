import { createSlice } from '@reduxjs/toolkit';
import newsData from "../util/News/initialState"

const initialState = {
    newsList: newsData,
    categories: "all",
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        addComment: (state, action) => {
            const { newsId, comment } = action.payload;
            const newsItem = state.newsList.find((news) => news.id === newsId);
            if (newsItem) {
                newsItem.textComent[`coment${newsItem.comments + 1}`] = comment;
                newsItem.comments += 1;
            }
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
    },
});

export const selectNewsById = (state, newsId) =>
    state.news.newsList.find((news) => news.id === newsId);

export const { addComment, setCategories } = newsSlice.actions;
export default newsSlice.reducer;
