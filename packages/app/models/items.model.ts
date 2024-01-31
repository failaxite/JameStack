    export interface IItem {
        id: number;
        Name: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        slug: string;
        items: Item[]
    }
    
    export interface ItemsData {
        data: IItem[];
        meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
        };
    }