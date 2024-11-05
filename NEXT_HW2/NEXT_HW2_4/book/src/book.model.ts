export interface BookDto {
    id: string;
    title: string;
    author: string;
    bookRegistrationDt: Date; 
    bookUpdateDt?: Date;       
    isAvailable: boolean;       
}
