import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ArchiveIcon from '@mui/icons-material/Archive';

export const chartData = [
    {
        charttitle:"Account Receivable",
        linedata :['105k', '145k', '95k', '149k', '90k']
    },
    {
        charttitle:"Account Payable",
        linedata :['80k', '160k', '105k', '140k', '107k']
    }
]

export const xLabels = [
    'Current',
    '1-30',
    '30-60',
    '60-90',
    '+91',
  ];

  export const menuData = [
    { icon: EditIcon , text: 'PDF' },
    { icon: FileCopyIcon, text: 'Google Sheets' },
    { icon: ArchiveIcon , text: 'Excel' },
    { icon: ArchiveIcon , text: 'CSV' }, 
  ];
 