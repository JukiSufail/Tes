import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'fans MU',
		company: 'Manchester United',
		description: 'Fans MU Nomer 1',
		contract: ContractType.FansMU,
		type: 'Fans Sejati',
		location: 'Goa Lamprechtsofen,Austria',
		period: { from: new Date(2017, 10, 17) , to: new Date },
		skills: getSkills('GGMU', 'EPL'), 
		name: 'Fans MU',
		color: 'red',
		links: [],
		logo: Assets.Ngotak,
		shortDescription: 'Aku Bangga jadi Fans MU'
	},
	{
		slug: 'Kanokari',
		company: 'Rent a Girlfriend',
		description: 'Chizuru LonT',
		contract: ContractType.Kanokari,
		type: 'Haters Sejati',
		location: 'Chūō, Tokyo, Jepang',
		period: { from: new Date(2017, 7, 11) , to: new Date },
		skills: getSkills('ChizuruLonT', 'KazuyaDongok'), 
		name: 'Penghujat Kanokari',
		color: 'red',
		links: [],
		logo: Assets.Fuhrer,
		shortDescription: 'Saatnya hina Kanokari'
	},
];

export const title = 'Experience';
