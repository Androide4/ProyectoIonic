import {Rating} from "../interfaces/rating.model";

export interface Product{
    id: number;           // Identificador del producto (02/03/2025)
    title: string;        // Título del producto (02/03/2025)
    price: number;        // Precio del producto (02/03/2025)
    description: string;  // Descripción del producto (02/03/2025)
    category: string;     // Categoría del producto (02/03/2025)
    image: string;        // URL de la imagen del producto (02/03/2025)
    rating: Rating;       // Objeto que contiene la calificación y el conteo (02/03/2025)
}