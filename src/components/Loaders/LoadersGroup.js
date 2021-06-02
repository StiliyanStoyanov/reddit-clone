import CardLoader from "./CardLoader";
import CompactLoader from "./CompactLoader";

const LoadersGroup = ({type = "compact", animated = true, background = false, opacity = 0.4, length = 5}) => {
    const array = [...Array(length)];
    switch (type) {
        case "compact": {
            return (
                <div>
                    {array.map((_, i) => (
                        <CompactLoader background={background} opacity={opacity} animated={animated} key={i}/>
                    ))}
                </div>
            )
        }
        case "card": {
            return (
                <div>
                    {array.map((_, i) => (
                        <CardLoader background={background} opacity={opacity} animated={animated} key={i}/>
                    ))}
                </div>
            )
        }
        default: {
            return (
                <div>
                    {array.map((_, i) => (
                        <CardLoader background={background} opacity={opacity} animated={animated} key={i}/>
                    ))}
                </div>
            )
        }
    }
};


export default LoadersGroup;
