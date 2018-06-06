
const headers = {
	category:['categorie'],
	name:['nom'],
	country:['pays'],
	description:['description'],
	website:['page_web'],
	address:['google_maps'],
	phone:['tel','fax','telephone','contact'],
	obs:['obs','extra','notes'],
	quility:['qualite_(info)']
}

export function transformHeaders(_headers){
	return _headers.map(h=>{
		for(var x in headers){
			if(headers[x].includes(h)){
				return x;
			}else{
				return h;
			}
		}
	});
}