export const state = () => ({
    list: [
        {
            text: 'milica',
            done: false
        },
        {
            text: 'feniks',
            done: false
        },
        {
            text: 'stefan',
            done: false
        }
    ]
})


  export const getters = {
    getList: (state) => state.list
}