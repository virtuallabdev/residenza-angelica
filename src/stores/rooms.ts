import { readable } from 'svelte/store';

export type Owner = 'angelica' | 'menta';

export interface Room {
	title_label: string;
	price: number;
	short_description_label: string;
	description_label: string;
	gallery: string[];
	people: number;
	square_m: number;
	owner: Owner;
}

const roomsData: Room[] = [
	{
		title_label: 'Room 1',
		price: 100,
		short_description_label: 'Beautiful room with garden view',
		description_label: 'A spacious and bright room perfect for families',
		gallery: ['room1_1.jpg', 'room1_2.jpg', 'room1_3.jpg'],
		people: 2,
		square_m: 25,
		owner: 'angelica'
	},
	{
		title_label: 'Room 2',
		price: 150,
		short_description_label: 'Luxury suite with balcony',
		description_label: 'Premium room with modern amenities and sea view',
		gallery: ['room2_1.jpg', 'room2_2.jpg'],
		people: 4,
		square_m: 35,
		owner: 'menta'
	}
];

export const rooms = readable<Room[]>(roomsData);
