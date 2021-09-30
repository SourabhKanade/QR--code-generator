import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import SvgButton from './GenerateButt';


function Generator() {
const [word, setWord] = useState("");
const [temp, setTemp] = useState(""); 
const [size, setSize] = useState("");
const [bgColor, setBgColor] = useState("ffffff");
const [qrCode, setQrCode] = useState("");

// Changing the URL only when the user changes the input
useEffect(() => {
	setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`);
}, [word, size, bgColor]);

// Updating the input word when user click on the generate button
function handleClick() {
	console.log('i am clicked');
	setWord(temp);
}

return (
	<div className="App">
	<h1>QR Code Generator</h1>
	<div className="input_box">
		<div className="gen">	
		<TextField label="Enter text to encode" type="text" onChange={ (event) => {setTemp(event.target.value)}} placeholder="Input" required/> 
		<Button className="button" onClick={handleClick} variant="outlined" size="large" > Generate </Button>
		</div>

		<div className="extra">
		<h5>Background Color:</h5>
		<input type="color" onChange={(event) => { setBgColor(event.target.value.substring(1)) }} />
		<h5>Dimension:</h5>
		<input type="range" min="100" max="500"	value={size} onChange={(event) =>	{setSize(event.target.value)}} />
		</div>
	</div>
	<div className="output-box">
		<img src={qrCode} alt="" />
		<a href={qrCode} download="QRCode">	<button type="button">Download</button>
		</a>
	</div>
	</div>
);
}

export default Generator;
