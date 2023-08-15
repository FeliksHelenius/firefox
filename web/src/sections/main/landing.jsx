import './landing.css';
import Logo from '../../assets/icons/firefox-logo.svg';
import LogoText from '../../assets/icons/firefox-watermark.svg';
import More from '../../assets/icons/more.svg';
import Test from '../../assets/icons/test.svg';
import { useState } from 'react';

export default function Landing() {
	const [isHovering, setIsHovering] = useState(false);
	return (
		<div id="landing">
			<div className="logo-wrapper">
				<img src={Logo} alt="" className="logo1" />
				<img src={LogoText} alt="" className="logo2" />
			</div>
			<div className="searchbar-wrapper">
				<input type="text" placeholder="Search with Google or enter address" />
			</div>
			<div className="cards-wrapper">
				{isHovering && <img src={More} className="icon"></img>}
				<div
					className="card-inner-wrapper"
					onMouseEnter={() => {
						setIsHovering(true);
					}}
					onMouseLeave={() => {
						setIsHovering(false);
					}}>
					<img src={Test} alt="" className="frequently-visited-card" />
				</div>
				<p>lorem</p>
			</div>
		</div>
	);
}
