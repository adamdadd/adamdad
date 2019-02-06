<!-- src/components/ProductList.vue -->
<template>
  <table class="table table-hover education-table">
    <thead>
      <tr>
        <th>Subject</th>
        <th>Grade</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" track-by="id">
        <td>{{product.name}}</td>
        <td>{{product.description}}</td>
        <td>{{product.price}}:-</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          id: '1',
          name: 'Physics',
          description: 'A',
          price: 2011
        },
        {
          id: '2',
          name: 'Maths',
          description: 'A',
          price: 2010
        },
        {
          id: '3',
          name: 'ICT',
          description: 'Distinction',
          price: 2011
        }
      ]
    }
  }
}
</script>
