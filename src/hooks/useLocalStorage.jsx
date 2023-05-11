const useLocalStorage = () => {
    const setlocalStorage = (key, data) => {
        return localStorage.setItem(key, JSON.stringify(data));
    };

    const getlocalStorage = (key) => {
        let data = localStorage.getItem(key);
        return data;
    };

    return {
        setlocalStorage,
        getlocalStorage,
    };
};

export default useLocalStorage;
