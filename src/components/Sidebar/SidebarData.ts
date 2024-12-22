import {
    Dashboard as DashboardIcon,
    ShoppingCart as ShoppingCartIcon,
    BarChart as BarChartIcon,
    Description as DescriptionIcon,
    Layers as LayersIcon,
    Segment,
    LocalGroceryStoreOutlined as LocalGroceryStoreOutlinedIcon , 
    HomeOutlined as HomeOutlinedIcon,
  } from '@mui/icons-material'; 

  interface NAVIGATION{

    kind:"string";
    title:"string";
    segment:"";
    icon:"React.ElementType"; 
    children:"";

  }
  export const NAVIGATION = [
    { kind: 'header', title: 'Main items' },
    {
      segment: 'dashboard',
      title: 'Dashboard',
      icon: HomeOutlinedIcon ,
      children: [
        { segment: 'dashboard/socialmedia', title: 'Social Media' },
        { segment: 'dashboard/finance', title: 'Finance' },
      ],
    },
    {
      segment: 'eCommerce',
      title: 'eCommerce',
      icon: LocalGroceryStoreOutlinedIcon ,
      children: [
        { segment: 'eCommerce/cart', title: 'Cart' },
        { segment: 'eCommerce/product', title: 'Product' },
      ],
    },
    { kind: 'header', title: 'Analytics' },
    {
      segment: 'reports',
      title: 'Reports',
      icon: BarChartIcon ,
      children: [
        { segment: 'dashboard/sales', title: 'Sales' },
        { segment: 'dashboard/traffic', title: 'Traffic' },
      ],
    },
  ];
  