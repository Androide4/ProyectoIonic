export interface Product{
    id: number;           // Identificador del producto
    title: string;        // Título del producto
    price: number;        // Precio del producto
    description: string;  // Descripción del producto
    category: string;     // Categoría del producto
    image: string;        // URL de la imagen del producto
    rating: Rating;       // Objeto que contiene la calificación y el conteo
}
export interface Rating {
    rate: number;  // Calificación del producto
    count: number; // Número de reseñas
}
