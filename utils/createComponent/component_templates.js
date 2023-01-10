// componentUI.jsx
export const componentUI = (name) => `import React from 'react';

import './${name}.css';

 export default function ${name}Ui (props){
	const {} = props;
  return <div>Hello 👋, I am a ${name} component.</div>;
};
`;
// componentLogic.jsx
export const componentLogic = (name) => `import React from 'react';

 export default function ${name}Logic (UI,props){
	const propsForUI = {
		...props,
		
	};
  return UI(propsForUI);
};

`;

// index.jsx
export const barrel = (name) => `import ${name}UI from './${name}UI';
import ${name}Logic from './${name}Logic';

export default function ${name} (props){
	return ${name}Logic(${name}UI,props);
}
`;
