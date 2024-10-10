

export default function productsItem(props){
    return  `
    <div>
        <img src="${props.image}" id="image">
        <div>
            <span>${props.title}</span>
            <span>${props.price}</span>
            <span>${props.category}</span>
            <button>COMPRAR<button>
        </div>
    </div>
`
}