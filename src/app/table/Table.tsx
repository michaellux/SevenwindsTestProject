import Box from '@mui/material/Box';
import {
  DataGrid,
  GridColDef,
  GridEventListener,
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

  const columns: GridColDef[] = [
    { field: 'equipmentCosts', headerName: 'EquipmentCosts', width: 180, editable: true, disableColumnMenu: true },
    {
      field: 'estimatedProfit',
      headerName: 'EstimatedProfit',
      type: 'number',
      width: 100,
      align: 'left',
      headerAlign: 'left',
      editable: true,
      disableColumnMenu: true
    },
    {
      field: 'machineOperatorSalary',
      headerName: 'MachineOperatorSalary',
      type: 'number',
      width: 170,
      editable: true,
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: 'mainCosts',
      headerName: 'MainCosts',
      width: 110,
      editable: true,
      type: 'number',
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: 'materials',
      headerName: 'Materials',
      width: 130,
      editable: true,
      type: 'number',
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: 'mimExploitation',
      headerName: 'MimExploitation',
      width: 140,
      editable: true,
      type: 'number',
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: 'overheads',
      headerName: 'Overheads',
      width: 130,
      editable: true,
      type: 'number',
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: 'rowName',
      headerName: 'RowName',
      width: 150,
      editable: true,
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: 'salary',
      headerName: 'Salary',
      width: 140,
      editable: true,
      type: 'number',
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: 'supportCosts',
      headerName: 'SupportCosts',
      width: 180,
      editable: true,
      type: 'number',
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left'
    },
    {
      field: 'total',
      headerName: 'Total',
      width: 180,
      editable: true,
      type: 'number',
      disableColumnMenu: true,
      align: 'left',
      headerAlign: 'left'
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
