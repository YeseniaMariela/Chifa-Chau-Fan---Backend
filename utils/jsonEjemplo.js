//Para insertar Categorias
{
  [
    {
      "nombre": "Platos Especiales",
      "descripcion": "Lorem ipsus"
    },
  ]
}
//Para insertar Productos
{
  [
    {
      "nombre": "Arroz Chaufa",
      "precioUnidad": 8.5,
      "descripcion":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      "categoriaId": 1,
      "estado": "Disponible",
      "imagen":
        "https://cde.peru.com//ima/0/1/8/7/9/1879915/924x530/gastronomia.jpg"
    },
  ]
}

//Para insertar Mesa
{
  [
    {
      "numeroMesa":"1",
      "capacidad":"4",
      "estado":"disponible"
    },
    {
      "numeroMesa":"2",
      "capacidad":"8",
      "estado":"disponible"
    },
    {
      "numeroMesa":"3",
      "capacidad":"6",
      "estado":"disponible"
    }
  ]
}

//Para insertar Clientes
{
  [
    {
      "tipoDoc":"DNI",
      "numeroDoc":"85296345",
      "apellidos":"Acevedo Valverde",
      "nombre":"Eduardo",
      "fechaNac":"2000-01-19",
      "numCelular":"951852654",
      "direccion":"Jr. Ayacucho 122",
      "numUbigeo":"120101",
      "usuario":"eacevedo",
      "contrasenia":"eeeeeeeee"
    },
  ]
}

//Para insertar Venta
{
  [
    {
      "fecha": "2020-01-19",
      "hora": "10:00",
      "descuento": 1,
      "descripcionDesc": "Lorem Ipsus lorem ipsus lorem ipsus",
      "total": 10.5,
      "observaciones": "Lorem Ipsus lorem ipsus lorem ipsus",
      "estado": "pendiente",
      "mesaId": 1,
      "clienteId": 1,
      "productos": [
        {
          "id": 1,
          "precio": 10.5,
          "cantidad": 2
        },
      ],
    }
  ]
}