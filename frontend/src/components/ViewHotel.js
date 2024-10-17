import React, {useState, useEffect } from 'react';
import {NavLink}from 'react-router-dom'
import jspdf from 'jspdf'
import "jspdf-autotable"



const ViewHotel=()=>{
    const[searchTerm,setsearchTerm]=useState("");//search


    //view data

   const [getuserdata,setUserdata]=useState([]);
   const [ldt,setDLTdata]=useState([]);
   console.log(getuserdata);



  const getdata=async(e)=>{
 

    
    const res =await fetch("http://localhost:8070/hotellist",{

      method:"GET",
      headers:{"Content-Type":"application/json"},

      
    });

 const data= await res.json();
 console.log(data);

   if (res.status===404 ||!data)
{
  console.log("error");

}else{
 setUserdata(data);
  console.log("data fetched");
}
}

  useEffect(()=>{
    getdata();
  },[]) 




  //delete supplier

const deleteuser = async (id) => {

    const res2 = await fetch(`http://localhost:8070/hotellist/delete/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
  
    const deletedata = await res2.json();
    console.log(deletedata);
  
    if (res2.status === 422 || !deletedata) {
        console.log("error");
    } else {
        console.log("user deleted");
        setDLTdata(deletedata)
        getdata();
    }
  
  
  }

  function generatePDF() {
    const doc = new jspdf();
    const tableColumn = ["Accomodation ID","Accomodation Name", "Accomodation Type", "City", "Price", "Image-URL"];
    const tableRows = [];

    getuserdata.slice(0).reverse().map(pdf => {
        const pdfData = [
            pdf.accomId,
            pdf.name,
            pdf.type,
            pdf.city,
            pdf.price,
            pdf.images
           
        ];
        tableRows.push(pdfData);
    });

    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8 }, startY: 35 });
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    doc.text("Hotel-Details-Report", 14, 15).setFontSize(12);
    doc.text(`Report Generated Date - ${dateStr} `, 14, 23);
    doc.save(`Hotel-Details-Report_${dateStr}.pdf`);

}
  
return(
<><nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">Booking.com</a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/viewBookAdmin">View All Bookings<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/viewHotel">View All Accomodation List<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/hotel">Add an Accomodation<span class="sr-only">(current)</span></a>
                    </li>

                </ul>

            </div>
        </nav><div>{/* className="container" */}

        <nav class="navbar navbar-dark bg-light">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search"   placeholder="Search" onChange={(e)=>{setsearchTerm(e.target.value);}} aria-label="Search"  />

  </form>
</nav> 

                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Index</th>
                            <th scope="col">Accomodation ID</th>
                            <th scope="col">Accomodation Name</th>
                            <th scope="col">Accomodation Type</th>
                            <th scope="col">City</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image-URL</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>

                    {getuserdata.filter((val)=>{ //search feature
     if(searchTerm===''){
      return val;
     }else if(
      val.accomId.toLowerCase().includes(searchTerm.toLowerCase())||
      val.type.toLowerCase().includes(searchTerm.toLowerCase())||
      val.city.toLowerCase().includes(searchTerm.toLowerCase())||
      val.price.toLowerCase().includes(searchTerm.toLowerCase())
     ){
      return val;
     }
      
     }).map((element,id)=>{


 

                            return (

                                <>
                                    <tr>
                                        <th scope="row">{id + 1}</th>
                                        <td>{element.accomId}</td>
                                        <td>{element.name}</td>
                                        <td>{element.type}</td>
                                        <td>{element.city}</td>
                                        <td>{element.price}</td>
                                        <td>{element.images}</td>
                                    
                                        <td></td>
                                        <td></td>
                                        <td className="d-flex justify-content-between">
                                        <NavLink to={`/updateHotel/${element._id}`}><button className="btn btn-dark fa-regular fa-pen-to-square"><i/></button></NavLink> 
                                            <button className="btn btn-dark fa-regular fa-trash-can" onClick={() => deleteuser(element._id)}><i/></button>
                                        </td>


                                    </tr>
                                </>
                            );
                        })}






                    </tbody>
                </table>
                <button className="btn btn-dark" onClick={generatePDF}>Generate Report</button>
            </div></>

    )
}



export default ViewHotel;
