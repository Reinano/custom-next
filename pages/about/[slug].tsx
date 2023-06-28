import {useRouter} from 'next/router';

const About = () => {
	const router = useRouter()
	
	return (
		<div style={{
			width: '100%',
			height: '100vh',
			marginRight: '50px',
			background: 'darkslategray',
		}}>
			<button
				style={{
					width: '300px',
					height: '300px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: 'white',
					background: 'blueviolet'
				}}
				onClick={() => {
					console.log('click')
				}}
			>{router.query.slug}</button>
		</div>
	);
};

export default About;
