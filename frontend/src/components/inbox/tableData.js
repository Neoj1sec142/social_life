
// Search Users Grid Data
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
// Search Threads Grid Data
const gridUserThreadS = (props) => {
  return(
    <div className="flex items-center gap-2">
        <a className="nol" href={`thread/${props.id}/`}>
          <p className="mt-1 flex no-wrap">{props.user.username}</p>
        </a>
    </div>
  )
}
const gridUserThreadR = (props) => {
  return(
    <div className="flex items-center gap-2">
        <a className="nol" href={`thread/${props.id}/`}>
          <p className="mt-1 flex no-wrap">{props.reciever.username}</p>
        </a>
    </div>
  )
}
const gridThreadDateSt = (props) => {
  if(props.date_created){
    const date = props.date_created.slice(0,10)
    return(
      <div className="flex items-center gap-2">
        <p mt-1>{date}</p>
      </div>
    )
  }
}

const gridThreadDate = (props) => {
  if(props.date_modified){
    const date = props.date_modified.slice(0,10)
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

export const threadsGrid = [
  { field: 'user',
    headerText: 'Started By',
    width: '170',
    template: gridUserThreadS,
    textAlign: 'Center',
  },
  { field: 'reciever',
    headerText: 'Recieved By',
    width: '170',
    template: gridUserThreadR,
    textAlign: 'Center',
  },
  { field: 'date_modified',
    headerText: 'Last Msg',
    width: '100',
    template: gridThreadDate,
    textAlign: 'Center'},
  { field: 'date_created',
    headerText: 'Date Started',
    width: '100',
    template: gridThreadDateSt,
    textAlign: 'Center'}
];
