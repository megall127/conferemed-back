import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {


  //Users
  Route.post('/register', 'UsersController.create').as('user.create')
  
  Route.post('/login', 'UsersController.login').as('user.login')
  
  Route.get('/getalldoctors', 'UsersController.getAllDoctors').as('user.getall')

  Route.get('/takedoctors', 'UsersController.takeDocDados').as('user.take')

  //Clinic
  Route.post('/registerclinic', 'ClinicsController.create').as('clinic.create')




  Route.post('/proc', 'ProcsController.create').as('proc.create')


  
  }).prefix('api')
  