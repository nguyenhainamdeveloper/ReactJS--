import './style.css'

const MyComponent = () => {
    // const nguyenhainam = "kaizin";
    // const nguyenhainam = 25;
    // const nguyenhainam = true;
    // const nguyenhainam = [1, 2, 3, 4]
    const nguyenhainam = {
        name: "nguyenhainam",
        nickname: "kaizin"
    }
    return (
        <>
            <div>Nguyen Hai Nam & {JSON.stringify(nguyenhainam)} </div>
            <div className="child" style={{ borderRadius: "5px" }}>Anh zin</div>
        </>
    );
}

export default MyComponent;