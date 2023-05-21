import Header from "../Header/Header";
import InfoDivs from "../InfoDivs/InfoDivs";
import './TopSection.scss';

function TopSection() {
    return (
        <div className="Top__Section">
            <div className="Header__Container">
                <Header headingLevel={1} />
            </div>
            <div className="Rating">
                <InfoDivs bodyText='Rated 5 Stars in Reviews' />
                <InfoDivs bodyText='Rated 5 Stars in Report Guru' />
                <InfoDivs bodyText='Rated 5 Stars in BestTech' />
            </div>
        </div>
    )
}

export default TopSection;