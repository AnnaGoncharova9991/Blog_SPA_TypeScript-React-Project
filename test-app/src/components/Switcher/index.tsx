import Button from "../Button";
import './switcher.scss'

interface ISwitcherProps {
    firstButtonText: string;
    secondButtonText: string;
}

const Switcher = ({firstButtonText, secondButtonText}: ISwitcherProps) => {
    return (
        <>
        <div className="switcher-wrapper">
            <Button className="switcher-button active" text={firstButtonText}/>
            <Button className="switcher-button" text={secondButtonText}/>
        </div>
        </>
    )
}

export default Switcher;