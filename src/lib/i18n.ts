export type Language = 'it' | 'en' | 'de';

export const translations = {
	it: {
		nav: {
			home: 'Home',
			rooms: 'Camere',
			gallery: 'Galleria',
			services: 'Servizi',
			contacts: 'Contatti',
			language: 'Lingua'
		},
		home: {
			title: 'Residenza Angelica',
			subtitle: 'Un\'esperienza indimenticabile',
			welcome: 'Benvenuto nella nostra struttura',
			cta: 'Scopri di più'
		},
		rooms: {
			title: 'Le Nostre Camere',
			subtitle: 'Confortevoli e accoglienti',
			standard: 'Camera Standard',
			deluxe: 'Camera Deluxe',
			suite: 'Suite',
			features: 'Caratteristiche',
			book: 'Prenota Ora'
		},
		gallery: {
			title: 'Galleria Fotografica',
			subtitle: 'Scopri gli spazi della nostra residenza',
			exterior: 'Esterno',
			interior: 'Interno',
			rooms: 'Camere',
			dining: 'Sala da pranzo'
		},
		services: {
			title: 'I Nostri Servizi',
			subtitle: 'Tutto ciò di cui hai bisogno',
			wifi: 'WiFi Gratuito',
			breakfast: 'Colazione Inclusa',
			parking: 'Parcheggio',
			reception: 'Ricevimento 24/7',
			concierge: 'Servizio Concierge',
			spa: 'Centro Benessere',
			restaurant: 'Ristorante',
			bar: 'Bar'
		},
		contact: {
			title: 'Contattaci',
			subtitle: 'Siamo qui per aiutarti',
			address: 'Indirizzo',
			phone: 'Telefono',
			email: 'Email',
			hours: 'Orari',
			send: 'Invia Messaggio',
			name: 'Nome',
			message: 'Messaggio',
			success: 'Messaggio inviato con successo!',
			error: 'Errore nell\'invio del messaggio'
		},
		footer: {
			rights: 'Tutti i diritti riservati',
			policy: 'Privacy Policy',
			terms: 'Termini di Servizio',
			sitemap: 'Mappa del Sito'
		}
	},
	en: {
		nav: {
			home: 'Home',
			rooms: 'Rooms',
			gallery: 'Gallery',
			services: 'Services',
			contacts: 'Contacts',
			language: 'Language'
		},
		home: {
			title: 'Residenza Angelica',
			subtitle: 'An unforgettable experience',
			welcome: 'Welcome to our facility',
			cta: 'Discover More'
		},
		rooms: {
			title: 'Our Rooms',
			subtitle: 'Comfortable and welcoming',
			standard: 'Standard Room',
			deluxe: 'Deluxe Room',
			suite: 'Suite',
			features: 'Features',
			book: 'Book Now'
		},
		gallery: {
			title: 'Photo Gallery',
			subtitle: 'Discover our residence spaces',
			exterior: 'Exterior',
			interior: 'Interior',
			rooms: 'Rooms',
			dining: 'Dining Room'
		},
		services: {
			title: 'Our Services',
			subtitle: 'Everything you need',
			wifi: 'Free WiFi',
			breakfast: 'Breakfast Included',
			parking: 'Parking',
			reception: '24/7 Reception',
			concierge: 'Concierge Service',
			spa: 'Wellness Center',
			restaurant: 'Restaurant',
			bar: 'Bar'
		},
		contact: {
			title: 'Contact Us',
			subtitle: 'We are here to help',
			address: 'Address',
			phone: 'Phone',
			email: 'Email',
			hours: 'Hours',
			send: 'Send Message',
			name: 'Name',
			message: 'Message',
			success: 'Message sent successfully!',
			error: 'Error sending message'
		},
		footer: {
			rights: 'All rights reserved',
			policy: 'Privacy Policy',
			terms: 'Terms of Service',
			sitemap: 'Sitemap'
		}
	},
	de: {
		nav: {
			home: 'Startseite',
			rooms: 'Zimmer',
			gallery: 'Galerie',
			services: 'Dienstleistungen',
			contacts: 'Kontakte',
			language: 'Sprache'
		},
		home: {
			title: 'Residenza Angelica',
			subtitle: 'Ein unvergessliches Erlebnis',
			welcome: 'Willkommen in unserer Einrichtung',
			cta: 'Mehr Erfahren'
		},
		rooms: {
			title: 'Unsere Zimmer',
			subtitle: 'Komfortabel und einladend',
			standard: 'Standardzimmer',
			deluxe: 'Deluxe-Zimmer',
			suite: 'Suite',
			features: 'Eigenschaften',
			book: 'Jetzt Buchen'
		},
		gallery: {
			title: 'Fotogalerie',
			subtitle: 'Entdecken Sie unsere Residenzbereiche',
			exterior: 'Außenbereich',
			interior: 'Innenraum',
			rooms: 'Zimmer',
			dining: 'Speisesaal'
		},
		services: {
			title: 'Unsere Dienstleistungen',
			subtitle: 'Alles was Sie brauchen',
			wifi: 'Kostenloses WiFi',
			breakfast: 'Frühstück inklusive',
			parking: 'Parkplatz',
			reception: '24/7 Rezeption',
			concierge: 'Concierge-Service',
			spa: 'Wellness-Zentrum',
			restaurant: 'Restaurant',
			bar: 'Bar'
		},
		contact: {
			title: 'Kontaktieren Sie Uns',
			subtitle: 'Wir sind hier um zu helfen',
			address: 'Adresse',
			phone: 'Telefon',
			email: 'E-Mail',
			hours: 'Öffnungszeiten',
			send: 'Nachricht Senden',
			name: 'Name',
			message: 'Nachricht',
			success: 'Nachricht erfolgreich versendet!',
			error: 'Fehler beim Versenden der Nachricht'
		},
		footer: {
			rights: 'Alle Rechte vorbehalten',
			policy: 'Datenschutzrichtlinie',
			terms: 'Nutzungsbedingungen',
			sitemap: 'Sitemap'
		}
	}
};

export function t(lang: Language, key: string): string {
	const keys = key.split('.');
	let value: any = translations[lang];

	for (const k of keys) {
		value = value?.[k];
	}

	return value || key;
}
