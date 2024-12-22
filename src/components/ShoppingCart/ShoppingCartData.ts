export interface Shopping {
  Product: string;
  Price: number;
  Quantity: number;
  Total: number;
  size: string;
  color:string;
  imagecart : string;
  }

  export const columns: { id: keyof Shopping; label: string; align?: 'right' }[] = [
    { id: 'Product', label: 'Product' },
    { id: 'Price', label: 'Price', align: 'right' },
    { id: 'Quantity', label: 'Quantity', align: 'right' },
    { id: 'Total', label: 'Total', align: 'right' },
    { id: 'Total', label: '', align: 'right' },
  ];
  
 