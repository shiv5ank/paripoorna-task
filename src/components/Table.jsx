
import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
import { Button } from 'primereact/button';
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";


function Table(props) {



    const { tableData, posts, refresh,filter,pagination,sortable} = props


    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    })

  


    return (
        <div >

          
            {
                filter &&
                <div >
                    <InputText placeholder="Search" onInput={(e) => setFilters({ global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS } })} />
                </div>
            }

{
                refresh && <div>
                    <Button label="Refresh" onClick={()=>window.location.reload(false)}></Button>
                </div>
            }

            <DataTable
                value={posts}
                responsiveLayout="stack" breakpoint="960px"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                dataKey="id"
                paginator={pagination}
                sortMode='multiple'
                filters={filters}
                emptyMessage="No data found."
                className="datatable-responsive"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
                rows={10}
                
            >
                {tableData.map((col) => (
                    <Column key={col.field} field={col.field} header={col.header} sortable={sortable}   />
                ))}
            </DataTable>

        </div>
    )
}

export default Table