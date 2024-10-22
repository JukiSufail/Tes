import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'S5 Teng',
		description: '',
		location: 'Konoha',
		logo: Assets.TheNuruls,
		name: '',
		organization: 'Akatsuki',
		period: { from: new Date(2024, 0, 1), to: new Date(2024, 1, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['s5 teng']
	}
];

export const title = 'Education';
