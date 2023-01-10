import EntityInfoUI from './EntityInfoUI';
import EntityInfoLogic from './EntityInfoLogic';

export default function EntityInfo (props){
	return EntityInfoLogic(EntityInfoUI,props);
}
