import { createStore } from "redux";

const $form = document.getElementById("form");
$form.addEventListener("submit", handleSubmit)
function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData($form);
    const title = data.get("title");
    console.log(title)
    store.dispatch({
        type: "ADD_SONG",
        payload: {
            title
        }
    })

}
const initialState = [
    {
        "title": "Despacito"
    },
    {
        "title": "One more thin"
    },
    {
        "title": "Echame la culpa"
    }
]
const reducer = function (state, action) {
    switch (action.type) {
        case "ADD_SONG":
            return [...state, action.payload]
            break;
        default:
            return state;
            break;
    }
}
const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


function render() {
    const $container = document.getElementById("playlist");
    $container.innerHTML='';
    const playList = store.getState();
    playList.forEach(ele => {
        const element = document.createElement('p');
        element.textContent = ele.title;
        $container.appendChild(element);
        console.log(ele)
    });
}

render();

function handleChange() {
    render();
}
store.subscribe(handleChange);
