import React, { useEffect, useState } from "react";
import { Title } from "./styles";
import { Calendar } from "primereact/calendar";
import api from "../../services/api";
import ListOfLaunch from "../../components/ListOfLaunch/ListOfLaunch";
import MyDatable, { Launch } from "../../components/MyDatable/MyDatatable";
const Dashboard: React.FC = () => {
  // const [date, setDate] = useState<Date | Date[] | undefined>(new Date());
  const [date15, setDate15] = useState(new Date());
  const [launch, setLaunch] = useState<Launch[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState()

 
  //   {
  //     name_launch: "Lançamento 1",
  //     rocket: {
  //       rocket_id: "1",
  //       rocket_name: "Foguete 1",
  //       rocket_type: "Normal",
  //     },
  //   },
  //   {
  //     name_launch: "Lançamento 2",
  //     rocket: {
  //       rocket_id: "2",
  //       rocket_name: "Foguete 2",
  //       rocket_type: "Normal",
  //     },
  //   },
  //   {
  //     name_launch: "Lançamento 3",
  //     rocket: {
  //       rocket_id: "3",
  //       rocket_name: "Foguete 3",
  //       rocket_type: "Normal",
  //     },
  //   },
  //   {
  //     name_launch: "Lançamento 4",
  //     rocket: {
  //       rocket_id: "4",
  //       rocket_name: "Foguete 4",
  //       rocket_type: "Normal",
  //     },
  //   },
  //   {
  //     name_launch: "Lançamento 5",
  //     rocket: {
  //       rocket_id: "5",
  //       rocket_name: "Foguete 5",
  //       rocket_type: "Normal",
  //     },
  //   },
  // ]);

  useEffect(() => {
    api
      .get("/launches")
      .then((response) => {
        setLaunch(response.data);
        setIsLoading(true);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(true);
      });
  }, []);

  const setField = (val:any,key:any)=>{
    var _launch = {...launch}
    _launch[key] = val
    setLaunch(_launch)
  }
  return (
    <>
      <Title>SpaceX | Falcons</Title>

      <ListOfLaunch releases={launch} loaded={isLoading} />

      <MyDatable
       releases={launch}
       lastSave={launch}
       setReleases={setLaunch}
       loaded={isLoading!!}
       isSearch
       rows={launch}
       columns={[
        {
          id:1,
          name:"Número do lançamento",
          value:"flight_number",
          onChange:(e:any)=>{
            setField(e.target.value,'cod_user')
          }
        },
        {
          id:2,
          name:"Nome da Missão",
          value:"mission_name",
          onChange:(e:any)=>{
            setField(e.target.value,'mission_name')
          }
        },
        {
          id:3,
          name:"Ano da missão",
          value:"launch_year",
          onChange:(e:any)=>{
            setField(e.target.value,'launch_year')
          }
        },
        {
          id:4,
          name:"Sucesso da missão",
          value:"launch_year",
          onChange:(e:any)=>{
            setField(e.target.value,'launch_year')
          }
        },
        {
          id:5,
          name:"Nome do foguete",
          value:"rocket_name",
          onChange:(e:any)=>{
            setField(e.target.value,'rocket_name')
          }
        },
       
      ]}
      
      />
    </>
  );
};

export default Dashboard;
