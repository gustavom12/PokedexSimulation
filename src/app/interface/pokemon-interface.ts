export interface pokemon {
    abilities: any[];
    base_experience: number;
    forms: form[];
    game_indices: any[];
    height: any;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: any[];
    name: string;
    order: number;
    species: any;
    sprites: any;
    stats: any[];
    types: any[];
    weight: any;
}

interface form{
    name: string;
    url:string
}