import axios from 'axios';

interface Pet {
    id: number;
    name: string;
    category: {
        id: number;
        name: string;
    };
    photoUrls: string[];
    tags: {
        id: number;
        name: string;
    }[];
    status: 'available' | 'pending' | 'sold';
}

async function fetchAvailablePet(): Promise<Pet | null> {
    const url = 'https://petstore3.swagger.io/api/v3/pet/1'

    try {
        const response = await axios.get<Pet>(url);
        console.log('Данные о питомце:', response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`Ошибка: ${error.message}`);
        } else {
            console.error('Произошла неизвестная ошибка', error);
        }
        return null;
    }
}

fetchAvailablePet()
