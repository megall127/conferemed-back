import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {


  //Users
  Route.post('/register', 'UsersController.create').as('user.create')
  
  Route.post('/login', 'UsersController.login').as('user.login')
  
  Route.get('/getalldoctors', 'UsersController.getAllDoctors').as('user.getall')

  Route.post('/takedoctors', 'UsersController.takeDocDados').as('user.take')

  Route.get('/checkroute', 'UsersController.checkRoute').as('user.checkroute')

  //Clinic
  Route.post('/registerclinic', 'ClinicsController.create').as('clinic.create')
  
  Route.get('/getallclinics', 'ClinicsController.getAllClinics').as('clinic.getAll')


  //Proc
  Route.post('/proc', 'ProcsController.create').as('proc.create')

  Route.post('/procedit', 'ProcsController.editDados').as('proc.edit')

  Route.post('/procAll', 'ProcsController.getAll').as('proc.all')

  Route.post('/createName', 'ProcNamesController.createProcName').as('proc.name')

  Route.get('/getNames', 'ProcNamesController.procNames').as('proc.allNames')


  
  }).prefix('api')
  