import React,{ useEffect, useState } from 'react';
import Table from "../../src/components/Table";
import axios from "axios";
import { TabView, TabPanel } from 'primereact/tabview';

function MainPage() {

    const [postData, setPostData] = useState([])
    const [companyData, setCompanyData] = useState([])

  

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) =>{
                setPostData(response.data)
            });
    }, []);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) =>
            setCompanyData(response.data));
    }, []);



    const tableOne = [
        {field: `id`, header: 'ID'},
        {field: 'userId', header: 'UserId', },
        {field: 'title', header: 'Title', },
        {field: 'body', header: 'Body', },
    ]
  


    const tableTwo = [
        {field: `id`, header: 'ID'},
        {field: 'company.name', header: 'Company' },
        {field: 'website', header: 'Website' },
        {field: 'company.bs', header: 'Service'},
        {field: 'address.city', header: 'City' },
        {field: 'address.zipcode', header: 'zipcode' },
     
    ]



    return (
        <div >
            <TabView >
                <TabPanel header="Posts" >
                    <Table tableData={tableOne} pagination={true} posts={postData} filter={true}/>
                </TabPanel>
                <TabPanel header="Company"  >
                    <Table tableData={tableTwo} posts={companyData} refresh={true} sortable={true}/>
                </TabPanel>
            </TabView>
        </div>
    )
}

export default MainPage