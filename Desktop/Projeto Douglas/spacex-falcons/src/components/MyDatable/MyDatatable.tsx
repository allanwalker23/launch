import React, { useState, useRef,useEffect } from "react";
import { OrderList } from "primereact/orderlist";
import { ProgressSpinner } from "primereact/progressspinner";
import { DataTable } from 'primereact/datatable';
import { InputText} from 'primereact/inputtext';
import {MultiSelect} from 'primereact/multiselect';
import {Column} from 'primereact/column';
import { isAfter, isBefore } from "date-fns";

interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}

export interface Launch {
  mission_name: string;
  rocket: Rocket;
  flight_number:number;
  launch_year:number;
  launch_date_local:Date;
  
  links: {
    mission_patch: string;
  };
}

interface LaunchProps {
  releases: Launch[];
  lastSave: Launch[];
  setReleases: (release:Launch[]) => void;
  isSearch:boolean;
  loaded: boolean;
  columns:any;
  rows:any;
}
const MyDatable: React.FC<LaunchProps> = ({
  releases,
  setReleases,
  lastSave,
  loaded,
  isSearch,
  columns
}: LaunchProps) => {
  const dt = useRef(null);
  const [globalFilter,setGlobalFilter] = useState();
  const [selectedFilterLatest, setSelectedFilterLatest] = useState(null);
  const [lastSaveState, setLastSaveState] = useState(lastSave);
  const onColumnToggle = (event:any) =>{
    const currentDate = new Date();
    
   
    switch(event.value[0].code){
      case 1:
        const afterReleases:Launch[]=[];
        lastSave.map(launch=>{
         
          if(isAfter(currentDate,new Date(launch.launch_date_local))){
            afterReleases.push(launch);
          }
        })
      
        setReleases(afterReleases);
        setSelectedFilterLatest(event.value)

        break;
        
        case 2:
         
          const beforeReleases:Launch[]=[];
          lastSave.map(launch=>{
           
            if(isBefore(currentDate,new Date(launch.launch_date_local))){
              afterReleases.push(launch);
            }
          })
          setReleases(beforeReleases);
          setSelectedFilterLatest(event.value)
          
        break;
    }
    
    
  }

  const header = () => {
    const options = [
      {name: 'Proxímos Lançamentos', code: 1},
      {name: 'Lançamentos anteriores', code: 2},
     
  ];
		return(
		<div style={{display: 'flex',alignItems: 'center'}}>
			{isSearch && <div className='p-col'>
      <h2 className="m-0">Lançamentos</h2>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
					<InputText
						// style={{width:'15em'}}
						type="search"
						onInput={(e:any) => setGlobalFilter(e.target.value)}
						placeholder="Pesquisa..." />
				</span>
			</div>}

      <div>
      <MultiSelect
        value={selectedFilterLatest}
        options={options}
        optionLabel="name"
        placeholder="Selecione um filtro"
        showSelectAll
        onChange={onColumnToggle}

      />

      </div>
			
		</div>
		)
	};
  return (
    <div>
      	<DataTable 
							style={{
								marginTop:"70px",
								// zIndex:2000
							}}
							ref={dt}
							value={releases}
							// selection={this.state.selectedProducts}
							// onSelectionChange={
							// 	(e) => this.setState({selectedProducts:e.value})
							// }
							dataKey="id"
							paginator
							rows={4}
							rowsPerPageOptions={
								[4, 8, 16, 32]
							}
							resizableColumns
							// reorderableColumns
							// reorderableRows
							// onRowReorder={this.onRowReorder}
							// onColReorder={this.onColReorder}
							paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
							// currentPageReportTemplate={`${get_word('showing')} {first} ${get_word('to').toLowerCase()} {last} ${get_word('of').toLowerCase()} {totalRecords} ${get_word('item').toLowerCase()+"s"}`}
							// globalFilter={this.state.globalFilter}
							emptyMessage="Carregando..."
							removableSort
							header={header}
							responsiveLayout="stack"
							breakpoint="550px"
							stripedRows
							sortMode="multiple"
							// showGridlines
							// scrollable
							// liveScroll="true"
							// scrollable
							scrollHeight="flex"
              // loading={loaded}

              
              
							>
                {columns.map((column:any) =>(
                  <Column field={column.value} header={column.name}></Column>
                ))}
              
                </DataTable>
    </div>
  );
};

export default MyDatable;
