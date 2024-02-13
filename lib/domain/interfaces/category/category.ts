export interface ICategory {
  id: string;
  name: string;
  image: string;
}

export interface IResponseCategory {
  categories: ICategory[];
}
