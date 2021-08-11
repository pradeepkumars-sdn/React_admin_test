import React from 'react'


 const product = ({products}) => {
    return (
        <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">S0N0</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Material</th>
      <th scope="col">Brand</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{products.sn}</th>
      <td>{products.name}</td>
      <td>{products.price}</td>
      <td>{products.material}</td>
      <td>{products.brand}</td>
    </tr>
   
  </tbody>
</table>
        </div>
    )
}

export default product;
