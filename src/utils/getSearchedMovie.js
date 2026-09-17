export const getSearchedMovie = async (searchText) => {
    const url = `https://api.tvmaze.com/search/shows?q=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data)
    return data;
}