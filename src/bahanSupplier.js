import React, { Component } from 'react';

class bahanSupplier extends Component{

    daftarBahan = [
        {nama: "Buah1", jumlah: "100", harga: "100.000"},
        {nama: "Buah2", jumlah: "100", harga: "100.000"},
        {nama: "Buah3", jumlah: "100", harga: "100.000"},
        {nama: "Buah4", jumlah: "100", harga: "100.000"},
        {nama: "Buah5", jumlah: "100", harga: "100.000"},
        {nama: "Buah6", jumlah: "100", harga: "100.000"},
        {nama: "Buah7", jumlah: "100", harga: "100.000"}
        ]

    render(){
        return (
                <div class="table-responsive">          
                <table class="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Age</th>
                      <th>City</th>
                      <th>Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                  </tbody>
                </table>
                </div>
            )
          }

      
};
export default  bahanSupplier;
