var id;
const debounce = (fun, delay) => {
    if (id) {
        clearTimeout(id)
    }
    id = setTimeout(() => {
        fun();
    }, delay)
}

export default debounce;