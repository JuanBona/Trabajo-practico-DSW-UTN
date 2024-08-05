export interface repository<T> {
    findAll(): Promise<T[] | undefined>;
    findOne(item: { id: string }): Promise<T | undefined>
    add(item: T): Promise<T | undefined>;
<<<<<<< Updated upstream
    update(id:string,item: T): Promise<T | undefined>;
=======
    update(id: string, item: T): Promise<T | undefined>;
>>>>>>> Stashed changes
    delete(item: {id:string}): Promise<T | undefined>;
}