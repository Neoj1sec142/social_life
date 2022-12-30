const gridUserProfile = (props) => (
  
    <div className="flex items-center gap-2">
      {/* <img
        className="rounded-full w-10 h-10"
        src={props.EmployeeImage}
        alt="employee"
      /> */}
      <a href={`new-thread/${props.id}/`}>
        <p className="mt-1">{props.username}</p>
      </a>
  </div>
);
const gridUserEmail = (props) => (
  <div className="flex items-center gap-2">
    <p>{props.email}</p>
  </div>
);
const gridUserActive = (props) => (
  <div className="flex items-center gap-2">
    <p className="mt-1">{props.is_active ? '🟢' : '🔴'}</p>
  </div>
);

const gridUserDateJoined = (props) => {
  if(props.date_joined){
    const date = props.date_joined.slice(0,10)
    return(
      <div className="flex items-center gap-2">
        <p mt-1>{date}</p>
      </div>
    )
  }
}

export const contextMenuItems = [
    'AutoFit',
    'AutoFitAll',
    'SortAscending',
    'SortDescending',
    'Copy',
    'Edit',
    'Delete',
    'Save',
    'Cancel',
    'PdfExport',
    'ExcelExport',
    'CsvExport',
    'FirstPage',
    'PrevPage',
    'LastPage',
    'NextPage',
  ];
  export const usersGrid = [
    // { headerText: 'Users',
    //   width: '150',
    //   textAlign: 'Center' },
    { field: 'username',
      headerText: 'Username',
      width: '130',
      template: gridUserProfile,
      textAlign: 'Center',
    },
    { field: 'is_active',
      headerText: 'Online Status',
      width: '120',
      textAlign: 'Center',
      template: gridUserActive
    },
    { field: 'email',
      headerText: 'Email',
      width: '170',
      textAlign: 'Center',
      // template: gridUserEmail 
    },
    { field: 'date_joined',
      headerText: 'Date Joined',
      width: '100',
      template: gridUserDateJoined,
      textAlign: 'Center'}
  ];

  // date_joined
  // email
  // username
  // id
  // is_active
  
//   export const employeesData = [
//     {
//       EmployeeID: 1,
//       Name: 'Nancy Davolio',
//       Title: 'Sales Representative',
//       HireDate: '01/02/2021',
//       Country: 'USA',
//       ReportsTo: 'Carson',
//       EmployeeImage:
//       avatar3,
//     },
//     {