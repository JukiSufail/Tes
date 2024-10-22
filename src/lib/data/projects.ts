import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'Ini PRoject',
		color: '#0000ff',
		description:
			'Boruto: Naruto Next Generations" mengikuti petualangan Boruto Uzumaki, putra Naruto Uzumaki, yang berusaha menemukan jalannya sendiri sebagai ninja. Dalam perjalanannya, Boruto menghadapi berbagai tantangan baru dan harus mengatasi harapan yang dibebankan oleh warisan ayahnya.',
		shortDescription:
			'Boruto: Naruto Next Generations" mengikuti petualangan Bor .......Baca Selengkapnya',
		links: [{ to: 'https://github.com/JukiSufail/Portofolio', label: 'GitHub' }],
		logo: Assets.TheNuruls,
		name: 'Ini Project',
		period: {
			from: new Date()
		},
		skills: getSkills('reactjs', 'js', 'tailwind'),
		type: 'Website Template',
	}
];

export const title = 'Projects';
