/* eslint-disable react/display-name */
import ArticleIcon from '@mui/icons-material/Article';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridRenderCellParams,
  GridRowEditStopReasons,
  GridRowModel,
  GridRowModesModel,
  GridRowsProp,
  GridToolbarContainer
} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getTreeRows, useCreateEntity } from './Table.service';
import './Table.style.css';
interface Props {}

export default function Table(props: Props) {
  const mutation = useCreateEntity();
  const [entityResponse, setEntityResponse] = useState(null);
  const [threeRowsResponse, setThreeRowsResponse] = useState(null);

  const initialRows: GridRowsProp = [
    {
      child: [],
      equipmentCosts: null,
      estimatedProfit: null,
      id: null,
      machineOperatorSalary: null,
      mainCosts: null,
      materials: null,
      mimExploitation: null,
      overHeads: null,
      rowName: '',
      salary: null,
      supportCosts: null,
      total: null
    }
  ];

  const [hover, setHover] = useState(false);

  const handleDelete = () => {
    console.log('Delete button clicked');
  };

  const columns: GridColDef[] = [
    {
      field: 'level',
      headerName: 'Level',
      width: 100,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="cell-content" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {hover && (
              <IconButton onClick={handleDelete}>
                <ArticleIcon />
              </IconButton>
            )}
          </div>
        );
      }
    },
    {
      field: 'equipmentCosts',
      headerName: 'EquipmentCosts',
      width: 180,
      editable: true,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="cell-content" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}></div>
        );
      }
    },
    {
      field: 'estimatedProfit',
      headerName: 'EstimatedProfit',
      type: 'number',
      width: 100,
      align: 'left',
      headerAlign: 'left',
      editable: true,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="cell-content" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}></div>
        );
      }
    },
    {
      field: 'machineOperatorSalary',
      headerName: 'MachineOperatorSalary',
      type: 'number',
      width: 170,
      editable: true,
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left',
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="cell-content" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}></div>
        );
      }
    },
    {
      field: 'mainCosts',
      headerName: 'MainCosts',
      width: 110,
      editable: true,
      type: 'number',
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left',
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="cell-content" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}></div>
        );
      }
    },
    {
      field: 'materials',
      headerName: 'Materials',
      width: 130,
      editable: true,
      type: 'number',
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left',
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="cell-content" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}></div>
        );
      }
    },
    {
      field: 'mimExploitation',
      headerName: 'MimExploitation',
      width: 140,
      editable: true,
      type: 'number',
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left',
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="cell-content" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}></div>
        );
      }
    },
    {
      field: 'overheads',
      headerName: 'Overheads',
      width: 130,
      editable: true,
      type: 'number',
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left',
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="cell-content" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}></div>
        );
      }
    },
    {
      field: 'rowName',
      headerName: 'RowName',
      width: 150,
      editable: true,
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left',
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="cell-content" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}></div>
        );
      }
    },
    {
      field: 'salary',
      headerName: 'Salary',
      width: 140,
      editable: true,
      type: 'number',
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left',
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="cell-content" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}></div>
        );
      }
    },
    {
      field: 'supportCosts',
      headerName: 'SupportCosts',
      width: 180,
      editable: true,
      type: 'number',
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left',
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="cell-content" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}></div>
        );
      }
    },
    {
      field: 'total',
      headerName: 'Total',
      width: 180,
      editable: true,
      type: 'number',
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left',
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="cell-content" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}></div>
        );
      }
    }
  ];

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  interface EditToolbarProps {
    setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
    setRowModesModel: (newModel: (oldModel: GridRowModesModel) => GridRowModesModel) => void;
  }

  function EditToolbar(props: EditToolbarProps) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      console.log();
    };

    return <GridToolbarContainer></GridToolbarContainer>;
  }

  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  useEffect(() => {
    mutation.mutateAsync().then((res) => {
      setEntityResponse(res);
    });
  }, []);

  useEffect(() => {
    if (entityResponse !== null) {
      getTreeRows(entityResponse.id).then((res) => {
        setThreeRowsResponse(res);
        console.log(res);
      });
    }
  }, [entityResponse]);

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary'
        },
        '& .textPrimary': {
          color: 'text.primary'
        }
      }}
    >
      <DataGrid
        className="layout-table"
        getRowId={(row) => row.rowName}
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel }
        }}
        hideFooterPagination
      />
    </Box>
  );
}
