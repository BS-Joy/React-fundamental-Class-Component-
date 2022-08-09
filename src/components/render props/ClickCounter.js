export default function ClickCounter({ count, incrementCount }) {
    return (
        <button type="button" onClick={incrementCount}>Clicked {count} times</button>
    )
}